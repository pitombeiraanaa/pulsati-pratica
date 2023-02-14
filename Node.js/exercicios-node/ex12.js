//Crie um programa que leia uma String do usuário e exiba a primeira letra de cada palavra

let palavra1;
let palavra2;

const readline1 = require("readline").createInterface({
    input: process.stdin,
     output: process.stdout,
   });
   
   readline1.question("Informe a primeira palavra: ", (palavra1) => {
        readline1.question("Informe o segunda palavra: ", (palavra2) => {
        console.log((palavra1.substr(0,1)), (palavra2.substr(0,1)));
        readline1.close();
        });});