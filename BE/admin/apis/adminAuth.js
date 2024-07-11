const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { adminVerifyLogin } = require('../utils/adminVerifyLogin');

const adminAuth = router.post('/admin-auth', adminVerifyLogin, async(req, res)=>{
    res.json({
        messege : "auth-success"
    })
})

module.exports  = {adminAuth};