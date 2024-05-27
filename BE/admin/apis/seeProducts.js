const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const seeProducts = router.get('/see-products' , async(req, res) =>{
        try {
            const products = await prisma.product.findMany({});
            res.json({
                 products
            })
        } catch (error) {
             console.log(error);
             return res.json({
                 messege : 'Internal-server-error'
             })
        }
})

module.exports = {seeProducts};