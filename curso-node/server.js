const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APp
const app = express();
app.use(express.json()); // enviar dados para a aplicação em formato json
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/node-api-rs-starter', 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
);
requireDir('./src/models');

// Primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);