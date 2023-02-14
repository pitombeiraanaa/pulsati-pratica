//Crie um programa que leia uma lista de números e exiba uma mediana desses números



let num1;
let num2;
let num3;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o primeiro número', num1 => {
    readline.question('Digite o segundo número', num2 => {
        readline.question('Digite o terceiro número', num3 => {
            console.log((parseInt(num1) + parseInt(num2) + parseInt(num3))/3);
    readline.close();
  })})});