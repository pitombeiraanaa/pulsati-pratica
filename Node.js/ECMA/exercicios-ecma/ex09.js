// crie um programa que use a nova sintaxe let e const do ECMAScript6 para definir variaveis que só possam ser acessadas dentro de um bloco de código

const nome = 'João';
let idade = 25;

function imprimirNome() {
 console.log(nome, idade);
}
imprimirNome( ` nome: ${nome} idade: ${idade}` );
