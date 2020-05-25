const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APp
const app = express();

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/node-api-rs-starter', 
    { useNewUrlParser: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create( {
        title: 'React Native',
        description: 'primeiro teste',
        url: 'google.com',
    })
    
    return res.send('Hello');
})

app.listen(3001);