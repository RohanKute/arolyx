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

const createProduct = router.post('/create-product', adminVerifyLogin, upload.array('file'), async (req, res) => {
    try {
        const imageUrlArr = [];
        const userData = req.body;
        for (const image of req.files) {
            const buffer = parser.format('.png', image.buffer);
            const uploadResult = await cloudinary.v2.uploader.upload(buffer.content, { folder: "arolyx" });
            if (uploadResult?.url) {
                const obj = {
                    url: uploadResult.url,
                    publicId: uploadResult.public_id
                }
                imageUrlArr.push(obj);
            }
        }
        const makeVisibleToUser = (userData.makeVisibleToUser === 'on')
        if (userData) {
            const product = await prisma.product.create({
                data: {
                    name: userData.name,
                    description: userData.description,
                    price: userData.price,
                    img: imageUrlArr,
                    makeVisibleToUser: makeVisibleToUser,
                    stock : Number(userData.stock)
                }
            });
            if (product) {
                console.log(product)
                return res.status(200).json({
                    message: "product-added-success",
                    code: 0,
                });
            }
        }
        return res.json({
            message: "input-fields-empty"
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "internel-server-error" });
    }
});

module.exports = { createProduct };
