// create product  



const express = require('express');
const router = express.Router();
const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage })
const datauri = require('datauri');
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
const path = require('path');
const { cloudinary } = require('../utils/helpers/cloudinaryConfig');

const createProduct = router.post('/create-product', upload.array('file'), async (req, res) => {
    try {
             req.files.map(async(image)=>{
             const buffer = parser.format('.png', image.buffer);
             const res = await cloudinary.v2.uploader.upload(buffer.content , {folder : "arolyx"});
             console.log(res);
           
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = {createProduct};

