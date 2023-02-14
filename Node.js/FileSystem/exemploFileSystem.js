class Usuario{
    nome;
    sobrenome;
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

exports.Usuario = Usuario;

new Usuario();
