const express = require('express');
const app = express();

const { seeProucts } = require('./user/apis/seeProducts');
const { registerUser } = require('./user/apis/register');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
const { loginUser } = require('./user/apis/login');
const { createProduct } = require('./admin/apis/createProduct');
const { updateProduct } = require('./admin/apis/updateProduct');
const { seeProducts } = require('./admin/apis/seeProducts');
const { deleteProduct } = require('./admin/apis/deleteProduct');
config();
const PORT = 3000;

app.use(bodyParser.json());
// app.use(express.json())
app.listen(PORT, () => {
      console.log('Server Started on port: 3000')
})

app.use('/user/onboard', registerUser);
app.use('/user/onboard', loginUser);
app.use('/user/see-prouducts', seeProucts);
app.use('/admin' , createProduct);
app.use('/admin' , updateProduct);
app.use('/admin', seeProducts);
app.use('/admin', deleteProduct);