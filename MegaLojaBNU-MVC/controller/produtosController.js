/*
Requisito 2: Criar um CRUD de produtos. Onde deve
ser possível cadastrar as informações de nome,
marca, descrição e valor;*/ 

const {Produtos} = require("../model/produtos").Produtos;

exports.createProduto = async (req, res) => {
    const {nomeProduto, marca, descricao, valor} = req.body;
    const produto = new Produtos();
    produto.nomeProduto = nomeProduto;
    produto.marca = marca;
    produto.descricao = descricao;
    produto.valor = valor;
    await produto.save();
    res.json(produto);
}

exports.getProdutos = async (req, res) => {
    const produtos = await produtos.findAll();
    res.json(produtos); 
}

exports.updateProduto = async (req, res) => {
const {nomeProduto, marca, descricao, valor} = req.body;
const produto = await produtos.findByPk(req.params.marca);
produto.nomeProduto = nomeProduto;
produto.marca = marca;
produto.descricao = descricao;
produto.valor = valor;
await produto.save();
res.json(produto);
}

exports.deleteProduto = async (req, res) => {
const produto = await Produtos.findByPk(req.params.nomeProduto);
await produto.destroy();
res.json({data: 'Produto deletado com sucesso!'});
}
