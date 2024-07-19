const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { verifyLogin } = require('../utils/verifyLogin');
const { handleJwtToken } = require('../utils/handleJwtToken');
const jwtSecret = process.env.JWT_SECRET;


const getCartCount = router.get('/get-cart-count', verifyLogin, async (req, res) => {
    try {
        const number = handleJwtToken().verifyJwtToken(req.headers.authorization, jwtSecret)?.number;
        const userWithCartCount = await prisma.user.findUnique({
            where: {
                number: Number(number)
            },
            select: {
                id: true,
                _count: {
                    select: {
                        cartProduct: true
                    }
                }
            }
        });

        const count = userWithCartCount?._count?.cartProduct || 0;
        if (count >= 0) {
            return res.status(200).json({
                count: count
            })
        }

        return res.status(200).json({
            message: "error"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "error"
        })
    }
})

module.exports = { getCartCount };