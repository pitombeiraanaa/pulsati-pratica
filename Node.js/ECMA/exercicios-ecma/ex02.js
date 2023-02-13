// crie um programa que use a nova sintaxe de arrow functions da ECMAScript6 para definir uma função que calcule o quadrado de um número.


let num1;
let num2;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número de base:', num1 => {
    readline.question('Digite um número de potencia:', num2 => {
    console.log(Math.pow(num1, num2));
    readline.close();
  })});