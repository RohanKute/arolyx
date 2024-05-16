const express = require('express');
const app = express();

const { seeProucts } = require('./user/apis/seeProducts');
const { registerUser } = require('./user/apis/register');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());
// app.use(express.json())
app.listen(PORT, ()=>{
      console.log('Server Started on port: 3000')
})

app.use('/user/onboard' ,registerUser ) // fix register for already registred users
app.use('/user/see-prouducts' , seeProucts)
