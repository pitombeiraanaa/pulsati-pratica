/*
Requisito 3: Deve ter uma forma de controlar o estoque de
todos os produtos (pode ser uma tabela com o código do
produto e a quantidade que existe em estoque);
*/ 

const {Estoque} = require('../model/estoque').Estoque;

exports.createEstoque = async (req, res) => {
    const{idProduto, quantidadeProduto} = req.body;
    const estoque = new Estoque();
    estoque.idProduto = idProduto;
    estoque.quantidadeProduto = quantidadeProduto;
    await estoque.save();
    res.json(estoque);
}

exports.getEstoque = async (req, res) => {
    const estoque = await Estoque.findAll();
    res.json(estoque);
}

exports.getEstoque = async (req, res) => {
    const {idProduto, quantidadeProduto} = req.body;
    const estoque = await Estoque.findById(req.params.idProduto)
    estoque.idProduto = idProduto;
    estoque.quantidadeProduto = quantidadeProduto;
    await estoque.save();
    res.json(estoque);
}



