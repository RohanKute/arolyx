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

const updateProduct = router.post('/update-product', upload.array('file'), async (req, res) => {
    try {
        const newData = req.body;
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
                if (!req.body.imgArr[0].includes(image.publicId)) {
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
            const makeVisibleToUser = (newData.makeVisibleToUser === 'true')
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
                    stock: newData.stock
                }
            })
            if (product) {
                return res.json({
                    messege: "update-success",
                    code: 0
                })
            }
            return res.status(500).json({
                messege: "fail",
                code: 1
            })
        }

    } catch (error) {
        return res.json({
            messege: "internal-server-error",
            code: 0
        })
    }
}) 

module.exports = {updateProduct};