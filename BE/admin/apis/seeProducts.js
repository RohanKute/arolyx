const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const { adminVerifyLogin } = require('../utils/adminVerifyLogin');
const { reduceImageSize } = require('../../user/utils/reduceImageSize');

const prisma = new PrismaClient();

const seeProductsAdmin = router.get('/see-products' , adminVerifyLogin, async(req, res) =>{
        try {
            const products = await prisma.product.findMany({});
            const reducedImgResProducts = reduceImageSize(products, 100)
            res.json({
                 products : reducedImgResProducts
            })
        } catch (error) {
             console.log(error);
             return res.json({
                 messege : 'Internal-server-error'
             })
        }
})

module.exports = {seeProductsAdmin};