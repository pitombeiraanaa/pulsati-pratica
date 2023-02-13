// crie um programa que verifique se o número exibido pelo usuário é par ou impar

// let num = 5;
// if (num % 2 == 0) {
//   console.log("O número é par");
// } else {
//     console.log("O número é impar");
// }

let num1;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('adicione um número ', num1 => {
  if (num1 % 2 == 0) 
  {
    console.log("O número é par");
  } else {
    console.log("O número é impar");
  

  readline.close();         }});