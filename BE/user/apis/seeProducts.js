const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seeProductsUser = router.get('/see-products', async (req, res) => {
    try {
        const products = await prisma.product.findMany({});
        // console.log(products);
        const reducedImgResProducts = products.map((product) => {
            product.img = product.img.map((img) => {
                img.url = img.url.replace('upload', 'upload/w_290,h_290')
                img.publicId = img.publicId
                return img

           })
           return product;
        })
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