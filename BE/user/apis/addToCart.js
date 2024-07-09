const express = require('express');
const router = express.Router();
const {PrismaClient}= require('@prisma/client');
const { verifyLogin } = require('../utils/verifyLogin');
const { handleJwtToken } = require('../utils/handleJwtToken');
const prisma = new PrismaClient();


const addToCart = router.post('/add-to-cart', verifyLogin, async(req, res)=>{
    try {
        const userNumber = handleJwtToken().verifyJwtToken(req.headers.authorization).number;
        const productId = req.body.product.id;
        const quantity = req.body.quantity;
        const userId = await prisma.user.findUnique({
             where:{
                 number: userNumber
             },
             select:{
                 id: true
             }
        });

        if(userId.id && productId){
            const productInCart = await prisma.cartProducts.create({
                data:{
                    productId : productId,
                    userId: userId.id,
                    quantity : Number(quantity)
                }
           })
           if(productInCart){
               return res.status(200).json({
                   messege: "success"
               })
           }
        }
        return res.status(400).json({
            messege : "product-not-found, product-id-may-be-incorrect"
        })
    } catch (error) {
        res.status(500).json({
             messege: "internal-server-error"
        })
    }
})

module.exports ={addToCart }