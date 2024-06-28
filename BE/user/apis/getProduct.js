const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getProduct = router.post('/get-product', async (req, res) => {
    try {
        const productId = req.body.id;
        const product = await prisma.product.findUnique({
            where: {
                id: Number(productId)
            }
        })
        if (product) {
            return res.status(200).json(product)
        }
        return res.status(404).json({
            messege: "not-found"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            messege: "internal-server-error"
        })
    }
})

module.exports = { getProduct }