const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { adminVerifyLogin } = require('../utils/adminVerifyLogin');

const seeUsers = router.get('/see-users', adminVerifyLogin, async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        if (users) {
            // Convert BigInt values to strings
            const usersWithConvertedBigInt = users.map(user => {
                for (let key in user) {
                    if (typeof user[key] === 'bigint') {
                        user[key] = user[key].toString();
                    }
                }
                return user;
            });
            return res.status(200).json(usersWithConvertedBigInt);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'error'
        });
    }
});

module.exports = { seeUsers };
