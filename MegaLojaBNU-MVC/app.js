const express = require('express');
const app = express();
app.use(express.json());
const{ createVendedor, getVendedores, updateVendedor, deleteVendedor } = require('./controller/vendedoresController');
const{ createProduto, getProdutos, updateProduto, deleteProduto } = require('./controller/produtosController');


app.post('/vendedores', createVendedor);
app.get('/vendedores', getVendedores);
app.put('/vendedores/:nome', updateVendedor);
app.delete('/vendedores/:nome', deleteVendedor);


app.post('/produto', createProduto);
app.get('/produto', getProdutos);
app.put('/produto/:marca', updateProduto);
app.delete('/produto/:nomeproduto', deleteProduto);

app.listen(8000);