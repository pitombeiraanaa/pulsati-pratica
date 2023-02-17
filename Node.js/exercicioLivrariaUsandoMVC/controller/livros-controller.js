/*Atividade 3: Para o cadastro dos livros eu preciso informar o
 título do livro,
 o número da edição, 
 o número com o ano de lançamento, 
 o código da editor e
 o código do autor.*/

const { Livros } = require("../model/livros").Livros;

exports.createLivros = async (res, req) => {
  const { titulo, numeroEdicao, anoLancamento, codigoEditora, codigoAutor } = req.body;
  const livro = new Livros();
  livro.titulo = titulo;
  livro.numeroEdicao = numeroEdicao;
  livro.anoLancamento = anoLancamento;
  livro.codigoEditora = codigoEditora;
  livro.codigoAutor = codigoAutor;
  await livro.save();
  res.json(livro);
};

exports.getLivros = async (res, req) => {
    const livros = await Livros.findAll();
    res.json(livros);
}

exports.updateLivro = async (res, req) => {
    const{titulo, numeroEdicao, anoLancamento, codigoEditora, codigoAutor } = req.body;
    const livro = await livros.findByTitulo(titulo);
    livro.titulo = titulo;
    livro.numeroEdicao = numeroEdicao;
    livro.anoLancamento = anoLancamento;
    livro.codigoEditora = codigoEditora;
    livro.codigoAutor = codigoAutor;
    await livro.save();
    res.json(livro);
}

exports.deleteLivro = async (res, req) => {
    const livro = await livros.findByTitulo(req.params.titulo);
    await livro.destroy();
    res.json({data: 'Livro deletado com sucesso!'});

}
