//Atividade 2: Preciso cadastrar todas as editoras dos livros.
 //Eu quero poder informar o nome 
// e cnpj da editora.
// Sabemos que no nosso cadastro manual, podemos correr o risco de errar, então eu necessito poder alterar
 //qualquer dado da editora 
// e também quero poder listar todas elas.

const {Editoras} = require('../model/editoras').Editoras;

exports.createEditoras = async (req, res) => {
const {nome, cnpj} = req.body;
const editora = new Editoras();
editora.nome = nome;
editora.cnpj = cnpj;
await autor .save();
res.json(editora);
}

exports.getEditoras = async (req, res) => {
const editoras = await Editoras.findAll();
res.json(editoras);
}

exports.updateEditora = async (req, res) => {
    const {nome, cnpj} = req.body;
    const editora = await Editoras.findByPk(req.params.Editoras);
    editora.nome = nome;
    editora.cnpj = cnpj;
    await editora.save();
    res.json(editora);
}

exports.deleteEditora = async (req, res) => {
    const editora = await Editoras.findByPk(req.params.Editoras);
    await editora.destroy();
    res.json({data: 'Editora deletada com sucesso!"'});
}