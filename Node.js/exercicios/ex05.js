// crie um programa que leia uma string e verifique a quantidade de letras e palavras nela

// const string = 'machado'

// console.log(string.length)

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Digite as palavras: ");
let contador = 0;
readline.on("line", (input) => {
  const frase = input.split(" ");
  for (let i = 0; i < input.length; i++) {
    if (input[i] != " ") {
      contador++;
    }
  }
  console.log(`Quantidade de palavras na frase ${frase.length},
                 quantidade de letras da frase ${contador}`);
  readline.close();
});