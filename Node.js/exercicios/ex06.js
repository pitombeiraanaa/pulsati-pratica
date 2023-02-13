// crie um programa que leia um número do usuario e crie uma tabuada desse número 

let numero = 5
let tabuada = "";
for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`;
}
console.log(tabuada);