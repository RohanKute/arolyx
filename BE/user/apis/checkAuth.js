const express = require('express');
const { verifyLogin } = require('../utils/verifyLogin');
const router = express.Router();


const chechAuth = router.post('/auth', verifyLogin, (req, res)=>{
       res.json({
           messege : "auth-success"
       })
});
module.exports  = {chechAuth};