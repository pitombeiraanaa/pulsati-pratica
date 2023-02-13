// leia dois numeros do usuario e exiba a multiplicação entre eles


let num1;
let num2;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('adicione o valor 1 ', num1 => {
    readline.question('adicione o valor 2 ', num2 => {
  console.log(parseInt(num1) * parseInt(num2));

  readline.close();         
    })});