const express = require('express');
const router = express.Router();
const { PrismaClient, Prisma } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = process.env.JWT_SECRET;
const prisma = new PrismaClient();

const loginUser = router.post('/login', async (req, res) => {
    try {
        const userData = req.body;
        if (userData) {
            const user = await prisma.user.findUnique({
                where: {
                    number: userData.number
                }
            })
            if (user) {
                const isValid = await bcrypt.compare(userData.password, user.password);
                if (isValid) {
                    const token = jwt.sign({ number: String(userData.number) }, jwtSecret, { expiresIn: "72h" });
                    if (token) {
                        return res.json({
                            messege: "login-success",
                            token: token
                        })
                    }
                }
                return res.json({
                    messege: "password-incorrect"
                })
            }
            return res.json({
                messege: "user-not-found"
            })
        }
    } catch (error) {
        console.log(error)
        return res.json({
            error: "internal-server-error"
        })
    }
})

module.exports = {loginUser};