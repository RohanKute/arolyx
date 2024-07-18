const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.ADMIN_JWT;
const adminLogin = router.post('/admin-login', async (req, res) => {
    try {
        if (req?.body?.secret) {
            const isValid = await bcrypt.compare(req.body.secret, process.env.ADMIN_SECRET);
            if (isValid) {
                const id = uuidv4();
                const token = jwt.sign({ id: id }, jwtSecret, { expiresIn: '48h' });
                if (token) {
                    return res.status(200).json({
                        message: 'success',
                        token: token
                    })
                }
            }
            return res.status(200).json({
                message: 'invalid-secret'
            })
        }
        return res.status(200).json({
            message: 'internal-server-error'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'internal-server-error'
        })
    }
});

module.exports = { adminLogin };