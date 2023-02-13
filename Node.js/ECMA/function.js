console.log('valor padrão para parametros');

function nomeUsuario(nome, sobrenome = 'Não informado') {
 console.log(nome, sobrenome);
}

nomeUsuario('Adriano', 'Flach');
nomeUsuario('Adriano')


//-------------------------------------------------------------

console.log('REST PARAMETERS');

function nomeUsuario(...nomes) {
 console.log(nomes);
}

nomeUsuario('Adriano', 'Flach', 'de', 'Araujo');
nomeUsuario('Adriano')


console.log('REST PARAMETERS');

function soma(...numero) {
 console.log(numero[0] + numero[1]);

}

soma(1, 1)

