const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { reduceImageSize } = require('../utils/reduceImageSize');

const prisma = new PrismaClient();

const seeProductsUser = router.get('/see-products', async (req, res) => {
    try {
        const products = await prisma.product.findMany({});
        const reducedImgResProducts = reduceImageSize(products, 290)
        res.json({
            products : reducedImgResProducts
        })
    } catch (error) {
        console.log(error);
        res.json({
            messege: 'Internal-server-error'
        })
    }
})

module.exports = { seeProductsUser };