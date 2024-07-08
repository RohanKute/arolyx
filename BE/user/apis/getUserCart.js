const express = require('express');
const { verifyLogin } = require('../utils/verifyLogin');
const { handleJwtToken } = require('../utils/handleJwtToken');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getUserCart = router.get('/get-cart' ,verifyLogin, async(req, res)=>{
       console.log("kjshfjk")
       try {
           const number = await handleJwtToken().verifyJwtToken(req.headers.authorization).number;
           if(number){
            const cartProduct = await prisma.user.findUnique({
                where: {
                  number: Number(number)
                },
                select: {
                  cartProduct: {
                    include: {
                      product: {
                         select: {
                            id : true,
                            name : true,
                            description : true,
                            price : true,
                            img :true 
                         }
                      }
                    }
                  }
                }
              })
              if(cartProduct.cartProduct.length){
                return res.status(200).json(cartProduct.cartProduct);
              }
            return res.status(200).json([]);
           }
        return res.json(200).json({
             messege : "internal-server-error"
        })
       } catch (error) {
          console.log(error)
          return res.json(500).json({
            messege : "internal-server-error"
       })
       }
})

module.exports = {getUserCart};