/* 
Requisito 1: Criar um CRUD para o cadastro de
vendedores. Deve ser possível informar o nome, cpf,
telefone e endereço. Deve ser gerado um 'id' para
cada vendedor;
*/

const { Vendedores } = require("../model/vendedores").Vendedores;

exports.createVendedor = async (req, res) => {
  const { nome, cpf, telefone, endereco } = req.body;
  const vendedor = new Vendedores();
  vendedor.nome = nome;
  vendedor.cpf = cpf;
  vendedor.telefone = telefone;
  vendedor.endereco = endereco;
  await vendedor.save();
  res.json(vendedor);
}

exports.getVendedores = async (req, res) => {
  const vendedores = await Vendedores.findAll();
  res.json(vendedores);
}

exports.updateVendedor = async (req, res) => {
  const { nome, cpf, telefone, endereco } = req.body;
  const vendedor = await Vendedores.findByPK(req.params.Vendedores);
  vendedor.nome = nome;
  vendedor.cpf = cpf;
  vendedor.telefone = telefone;
  vendedor.endereco = endereco;
  await vendedor.save();
  res.json(vendedor);
}

exports.deleteVendedor = async (req, res) => {
    const vendedor = await Vendedores.findByPk(req.params.Vendedores);
    await vendedor.destroy();
    res.json({data: 'Vendedor deletado com sucesso!'});
};
