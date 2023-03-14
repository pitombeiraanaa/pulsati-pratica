const Livros = require('../model/Livros-model').Livros;

exports.createLivros = async (req, res) => {
    const {codigoLivro, titulo, descricao} = req.body;
    const livro = new Livros();
    livro.codigoLivro = codigoLivro;
    livro.titulo = titulo;
    livro.descricao = descricao;
    await livro.save();
    res.json(livro);
};

exports.getLivrosById = async (req, res) => {
    const codigoLivro = req.params.codigoLivro;
    const livro = await Livros.findByPk(codigoLivro);
    res.json(livro);
};

exports.getAllLivros = async (req, res) => {
    const livros = await Livros.findAll();
    res.json(livros);
}

exports.updateLivros = async (req, res) => {
    const codigo = req.params.codigoLivro;
    const livros = await Livros.findByPk(codigoLivro);
    const {codigoLivro, titulo, descricao} = req.body;
    livros.codigoLivro = codigoLivro;
    livros.titulo = titulo;
    livros.descricao = descricao;
    await livros.save();
    res.json(livros);
}

exports.deleteLivros = async (req, res) => {
    const codigoLivro = req.params.codigoLivro;
    const livro = await Livros.findByPk(codigoLivro);
    await livro.destroy();
    res.json({ data: 'Usuario deletado com sucesso' });
}