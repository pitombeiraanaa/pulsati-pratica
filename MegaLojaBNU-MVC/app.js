const express = require('express');
const app = express();
app.use(express.json());
const{ createVendedor, getVendedores, updateVendedor, deleteVendedor } = require('./controller/vendedoresController');

app.post('/vendedores', createVendedor);
app.get('/vendedores', getVendedores);
app.put('/vendedores/:nome', updateVendedor);
app.delete('/vendedores/:nome', deleteVendedor);


app.listen(8000);