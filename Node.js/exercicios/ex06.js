// crie um programa que leia um número do usuario e crie uma tabuada desse número 

// let numero = 5
// let tabuada = "";
// for (let i = 1; i <= 10; i++) {
//     tabuada += `${numero} x ${i} = ${numero * i}\n`;
// }
// console.log(tabuada);



let num1;
let tabuada;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('adicione o numero ', num1 => {
    for (let i = 1; i <= 10; i++) {
        tabuada += `${num1} x ${i} = ${num1 * i}\n`;
        console.log(tabuada);
        readline.close();
    }})