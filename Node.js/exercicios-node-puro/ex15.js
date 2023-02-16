// crie um programa que leia uma string do usuario e verifique se é palindromo

let palavra;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Digite uma palavra ', palavra=> {
  console.log(palavra.toLowerCase() === palavra.split('').reverse().join(''));
  readline.close(); 
});