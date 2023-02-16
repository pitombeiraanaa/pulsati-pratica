// crie um programa que leia dois numeros de usuarios e exiba o resultado da soma entre eles.

// let a = 2;
// let b = 3; 
// let soma = a + b;

// console.log(soma);


let num1;
let num2;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('adicione o valor 1 ', num1 => {
    readline.question('adicione o valor 2 ', num2 => {
  console.log(parseInt(num1) + parseInt(num2));

  readline.close();         
    })});