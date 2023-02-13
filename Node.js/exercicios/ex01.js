// crie um programa que leia dois numeros de usuarios e exiba o resultado da soma entre eles.

// let a = 2;
// let b = 3; 
// let soma = a + b;

// console.log(soma);


let a;
let b;
let soma;

let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
     readline.question('adicione o primeiro valor: ', a => 
     readline.question('adicione o segundo valor: ', b =>    
     console.log(parseInt(a)+parseInt(b))));
     readline.close();