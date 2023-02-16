//Crie um programa que leia uma lista de palavras do usuário e as exiba de forma inversa

let palavra1;
let palavra2;
let palavra3;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Digite a primeira palavra ', palavra1 => {
    readline.question('Digite a segunda palavra ', palavra2 => {
        readline.question('Digite a terceira palavra ', palavra3 => {
            function reverseString(palavra1, palavra2, palavra3) {

                return palavra1.split("").reverse().join("");
                return palavra2.split("").reverse().join("");
                return palavra3.split("").reverse().join("");
            }
            console.log("palavra digitada " , palavra1  + " " + palavra2 + " " + palavra3)
            console.log(reverseString(palavra1));
            console.log(reverseString(palavra2));
            console.log(reverseString(palavra3));
    readline.close();
  })})});