const { createAutores, getAutores, updateAutor, deleteAutor } = require('./controller/autores-controller');
const { createEditoras, getEditoras, updateEditora, deleteEditora} = require('./controller/editoras-controller');
const { createLivros, getLivros, updateLivro, deleteLivro} = require('./controller/livros-controller');
const express = require('express');
const app = express();
app.use(express.json());


app.post('/autores', createAutores);
app.get('/autores', getAutores);
app.put('/autores', updateAutor);
app.delete('/autores', deleteAutor);

app.post('/editoras', createEditoras);
app.get('/editoras', getEditoras);
app.put('/editoras', updateEditora);
app.delete('/editoras', deleteEditora);

app.post('/livros', createLivros);
app.get('/livros', getLivros);
app.put('/livros', updateLivro);
app.delete('/livros', deleteLivro);


app.listen(8000);