//Crie um programa que leia a lista de números de um usuário e calcule a média desses números

let num1;
let num2;

const readline1 = require("readline").createInterface({
     input: process.stdin,
      output: process.stdout,
    });
    
    readline1.question("Informe o primero numero: ", (num1) => {
         readline1.question("Informe o segundo numero: ", (num2) => {
         console.log((parseInt(num1) + parseInt(num2))/2);
        
         readline1.close();
         });});