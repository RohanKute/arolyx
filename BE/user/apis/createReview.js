const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { verifyLogin } = require('../utils/verifyLogin');
const { handleJwtToken } = require('../utils/handleJwtToken');
const prisma = new PrismaClient();

const createReview = router.post('/create-review' , verifyLogin, async(req, res)=>{
    try {
        const userNumber = handleJwtToken().verifyJwtToken(req.headers.authorization, jwtSecret)?.number;
        const productId = req.body?.product.id;
        const userId = await prisma.user.findUnique({
             where:{
                 number: userNumber
             },
             select:{
                 id: true
             }
        });
        if(userId && productId){
            const reviewText = req?.body?.reviewText;
            const rating = Number(req?.body?.rating);
            const review = await prisma.review.create({
                 data : {
                      userId : userId,
                      productId : productId,
                      text : reviewText,
                      rating : rating
                 }
            })
            if(review){
                return res.status(200).json({
                    message : 'success'
                })
            }
        }

    } catch (error) {
         return res.status(500).json({
            message : 'error'
         })
    }
}) 