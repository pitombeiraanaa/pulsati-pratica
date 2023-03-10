const {createAutor, getAutores, updateAutor, deleteAutor} = require('./controller/autoresController');


const express = require('express');
const app = express();
app.use(express.json());

app.get('/autores', getAutores);

app.listen(8000);
