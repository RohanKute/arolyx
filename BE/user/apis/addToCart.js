const express = require('express');
const router = express.Router();
const {PrismaClient}= require('@prisma/client');
const { verifyLogin } = require('../utils/verifyLogin');
const { handleJwtToken } = require('../utils/handleJwtToken');
const prisma = new PrismaClient();


const addToCart = router.post('/add-to-cart', verifyLogin, async(req, res)=>{
    try {
        const userNumber = handleJwtToken.verifyLogin(req.headers.authorization).number;
        const productId = req.body.id;
        const userId = await prisma.user.findUnique({
             where:{
                 number: userNumber
             },
             select:{
                 id: true
             }
        });
        if(userId && productId){
            const productInCart = await prisma.cartProducts.create({
                data:{
                    productId : productId,
                    userId: userId
                }
           })
           if(productInCart){
               res.status(200).json({
                   messege: "product-add-success"
               })
           }
        }
        res.status(400).json({
            messege : "product-not-found[product-id-may-be-incorrect]"
        })
    } catch (error) {
        res.status(500).json({
             messege: "internal-server-error"
        })
    }
})