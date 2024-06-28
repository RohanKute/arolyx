const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const seeProductsUser = router.get('/see-products' , async(req, res) =>{
        try {
            const products = await prisma.product.findMany({});
            res.json({
                 products
            })
        } catch (error) {
             console.log(error);
             res.json({
                 messege : 'Internal-server-error'
             })
        }
})

module.exports = {seeProductsUser};