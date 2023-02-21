/*
Requisito 2: Criar um CRUD de produtos. Onde deve
ser possível cadastrar as informações de nome,
marca, descrição e valor;*/ 

const {Produtos} = require("../model/produtos").Produtos;

exports.createProduto = async (req, res) => {
    const {idProduto, nomeProduto, marca, descricao, valor} = req.body;
    const produto = new Produtos();
    produto.idProduto = idProduto;
    produto.nomeProduto = nomeProduto;
    produto.marca = marca;
    produto.descricao = descricao;
    produto.valor = valor;
    await produto.save();
    res.json(produto);
}

exports.getProdutos = async (req, res) => {
    let idProduto = req.query.idProduto;
    const produtos = await Produtos.findById(req.query.idProduto);
    res.json(produtos); 
}

exports.updateProduto = async (req, res) => {
const {nomeProduto, marca, descricao, valor} = req.body;
const produto = await produtos.findById(req.params.idProduto);
produto.idProduto = idProduto;
produto.nomeProduto = nomeProduto;
produto.marca = marca;
produto.descricao = descricao;
produto.valor = valor;
await produto.save();
res.json(produto);
}

exports.deleteProduto = async (req, res) => {
const produto = await Produtos.findById(req.params.idProduto);
await produto.destroy();
res.json({data: 'Produto deletado com sucesso!'});
}
