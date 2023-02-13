// crie um programa que verifique se o número fornecido pelo usário é primo ou não

// let num = 2;

// if (num % 2 == 0) {
//     console.log("O número é primo");
// } else {
//     console.log("O número não é primo");
// }

let num;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Adicione um número: ', num => {
    if (num % 2 == 0) {
        console.log("O número é primo");
    readline.close();
    } else {
        console.log("O número não é primo");
        readline.close();
  }});
    

