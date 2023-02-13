// crie um programa que leia o número do usuario e exiba a sua raiz quadrada

let num;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o número: ', num => {
    console.log(`A raiz quadrada é ${Math.sqrt(num)}!`);
    readline.close();
  });