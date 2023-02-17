//Vamos iniciar um projeto e precisamos de uma aplicação onde possam ser 
//cadastrados todos os livros disponíveis em nossa loja. 
//Temos mais de mil exemplares disponíveis para venda e precisamos catalogar tudo.

//Atividade 1: Preciso cadastrar todos os autores disponíveis. Eu quero poder informar o 
//nome, 
//sobrenome e
// a data de nascimento desse autor.

// Sabemos que no nosso cadastro manual, podemos correr o risco de errar, então eu quero
//poder alterar qualquer dado de um autor e
// também consultar todos os autores cadastrados.

const {Autores} = require('../model/autores').Autores;

exports.createAutores = async (req, res) => {
 const {nome, sobrenome, dataNascimento} = req.body;
 const autor = new Autores();
 autor.nome = nome;
 autor.sobrenome = sobrenome;
 autor.dataNascimento = dataNascimento;
 await autor.save();
 res.json(autor);
}

exports.getAutores = async (req, res) => {
 const autores = await Autores.findAll();
 res.json(autores);
}

exports.updateAutor = async (req, res) => {
    const {nome, sobrenome, dataNascimento} = req.body;
    const autor = await Autores.findByPk(req.params.Autores);
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.dataNascimento = dataNascimento;
    await autor.save();
    res.json(autor);
}

exports.deleteAutor = async (req, res) => {
    const autor = await Autores.findByPk(req.params.Autores);
    await autor.destroy();
    res.json({data:'Autor deletado com sucesso'});
};



