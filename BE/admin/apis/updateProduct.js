const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
const { cloudinary } = require('../utils/helpers/cloudinaryConfig');
const { adminVerifyLogin } = require('../utils/adminVerifyLogin');

const updateProduct = router.post('/update-product', adminVerifyLogin, upload.array('file'), async (req, res) => {
    try {
        const newData = req.body;
        req.body.imgArr = req.body.imgArr.length ? req.body.imgArr?.split(',') : [];
        if (newData) {
            const img = await prisma.product.findUnique({
                where: {
                    id: Number(newData.id)
                },
                select: {
                    img: true
                }
            })
            const newImgArr = img.img.filter((image) => {
                if (!req.body.imgArr.includes(image.publicId)) {
                    return image;
                }
            })
            for (const image of req.files) {
                const buffer = parser.format('.png', image.buffer);
                const uploadResult = await cloudinary.v2.uploader.upload(buffer.content, { folder: "arolyx" });
                if (uploadResult.url) {
                    const obj = {
                        url: uploadResult.url,
                        publicId: uploadResult.public_id
                    }
                    newImgArr.push(obj);
                }
            }
            
            if (req.body.imgArr) {
                for (const image of req.body.imgArr) {
                    await cloudinary.v2.uploader.destroy(image);
                }
            }
            const discountedPrice = Math.ceil(Number(newData.price) - (Number(newData.price)* Number(newData.discount/100)))

            const makeVisibleToUser = (newData.makeVisibleToUser === 'on')
            const isBestSeller = (newData.isBestSeller === 'on')
            const detailsArray = newData.detailsArray?.split(',')
            const product = await prisma.product.update({
                where: {
                    id: Number(newData.id)
                },
                data: {
                    name: newData.name,
                    description: newData.description,
                    price: newData.price,
                    img: newImgArr,
                    makeVisibleToUser: makeVisibleToUser,
                    stock: Number(newData.stock),
                    type : newData.type,
                    discount : Number(newData.discount),
                    discountedPrice : discountedPrice,
                    isBestSeller : isBestSeller,
                    details : detailsArray
                }
            })
            if (product) {
                return res.json({
                    messege: "update-success",
                    code: 1
                })
            }
            return res.status(200).json({
                messege: "fail",
                code: 0
            })
        }

    } catch (error) {
        console.log(error)
        return res.json({
            messege: "internal-server-error",
            code: 0
        })
    }
}) 

module.exports = {updateProduct};