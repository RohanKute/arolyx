const { PrismaClient } = require('@prisma/client');
const express = require('express');
const { verifyLogin } = require('../utils/verifyLogin');
const { handleJwtToken } = require('../utils/handleJwtToken');
const router = express.Router();
const prisma = new PrismaClient();
const jwtSecret = process.env.JWT_SECRET;


const removeCartItem = router.post('/remove-cart-item', verifyLogin, async(req, res)=>{
      try {
          const number = handleJwtToken().verifyJwtToken(req.headers.authorization, jwtSecret).number;
          const userId = await prisma.user.findUnique({
              where:{
                  number : Number(number)
              },
              select:{
                  id : true
              }
          })
          if(userId){
              const cartProductId = req.body.id;
              const updateResponse = await prisma.cartProducts.delete({
                  where: {
                     id: cartProductId,
                     userId : userId.id
                  }
              });
              if(updateResponse.id === cartProductId){
                 return res.status(200).json({
                     messege : 'success'
                 })
              }
         }
          return res.status(404).json({
              messege : 'user-not-found'
          })
      } catch (error) {
          res.status(500).json({
             messege : 'internal-server-error'
          })
      }
})

module.exports = {removeCartItem};