const express = require('express');
const router = express.Router();
const { PrismaClient , Prisma} = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const jwtSecret = process.env.JWT_SECRET;

const registerUser = router.post('/register', async(req, res) => {
    try {
        const userData = req.body;
        const user = await register(userData);
        if (!user.error) {
            const token = jwt.sign({ number: String(user.number) }, jwtSecret, { expiresIn: '72h' })
            console.log(token)
            if (token) {
                return res.json({
                     messege : 'success',
                     token : token
                });
            }
        }
        return res.json({
            messege: user.error
        })
    } catch (error) {
        console.log(error);
        return res.json({
             error : "internal-server-error"
        })
    }
})


const register = async (userData) => {
    try {
        const hash = bcrypt.hashSync(userData.password, 12);
        const user = await prisma.user.create({
            data: {
                name: userData.name,
                number: userData.number,
                password: hash
            }
        })
        if(user){
            return user;
        }
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code == 'P2002'){
                 return {
                    error : "number-already-registred"
                 }
            }
        }
    }
}

module.exports = {registerUser};