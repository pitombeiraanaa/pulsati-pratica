/*Requisito 4: Eu quero poder cadastrar uma venda (pode ser 
uma rota para executar venda) onde eu informo o código de 
um vendedor, o código de um produto e a quantidade 
vendida (pode ter uma tabela para registrar as vendas);
*/ 

const { Venda } = require("../model/realizarVenda").Venda;
exports.createVenda = async (req, res) =>{
    const { codigoVendedor, codigoProduto, quantidadeVendida } = req.body;
    const venda = new Venda ();
    venda.codigoVendedor = codigoVendedor;
    venda.codigoProduto = codigoProduto;
    venda.quantidadeVendida = quantidadeVendida;
    await venda.save();
    res.json(venda);
}

exports.getVendas = async (req,res) => {
    const vendas = await Venda.findAll();
    res.json(vendas);
}

exports.getVenda = async (req,res) => {
    const venda = await Venda.findByPk(req.params.codigoProduto);
    res.json(venda);
}

exports.updateVenda = async (req,res) => {
const { codigoVendedor, codigoProduto, quantidadeVendida } = req.body;
const venda = await Venda.findByPk(req.params.codigoProduto);
venda.codigoVendedor = codigoVendedor;
venda.codigoProduto = codigoProduto;
venda.quantidadeVendida = quantidadeVendida;
await venda.save();
}

exports.deleteVenda = async (req,res) => {
    const venda = await Venda.findByPk(req.params.codigoProduto);
    await venda.destroy();
    res.json(venda);
}