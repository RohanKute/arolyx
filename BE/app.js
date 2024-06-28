const express = require('express');
const app = express();

const { seeProductsUser } = require('./user/apis/seeProducts');
const { registerUser } = require('./user/apis/register');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
const { loginUser } = require('./user/apis/login');
const { createProduct } = require('./admin/apis/createProduct');
const { updateProduct } = require('./admin/apis/updateProduct');
const { seeProductsAdmin } = require('./admin/apis/seeProducts');
const { deleteProduct } = require('./admin/apis/deleteProduct');
config();
const PORT = 3000;
const cors = require('cors')
app.use(bodyParser.json());
// app.use(express.json())
app.listen(PORT, () => {
      console.log('Server Started on port: 3000')
})
app.use(cors())
app.use('/user/onboard', registerUser);
app.use('/user/onboard', loginUser);
app.use('/user', seeProductsUser);
app.use('/admin' , createProduct);
app.use('/admin' , updateProduct);
app.use('/admin', seeProductsAdmin);
app.use('/admin', deleteProduct);