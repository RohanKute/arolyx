const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { cloudinary } = require('../utils/helpers/cloudinaryConfig');
const prisma = new PrismaClient();

const deleteProduct = router.post('/delete-product', async (req, res) => {
    try {
        const userData = req.body;
        if (userData.id) {
            const productImages = await prisma.product.findUnique({
                where: {
                    id: Number(userData.id)
                },
                select: {
                    img: true
                }
            })
            if (productImages.img) {
                for (const image of productImages.img) {
                    await cloudinary.v2.uploader.destroy(image.publicId);
                }
            }

            const result = await prisma.product.delete({
                where: {
                    id: Number(userData.id)
                }
            })
            if (result) {
                return res.status(500).json({
                    messege: 'delete-success',
                    code: 1
                })
            }

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            messege: 'internal-server-error',
            code: 0
        })
    }
})
module.exports = { deleteProduct };