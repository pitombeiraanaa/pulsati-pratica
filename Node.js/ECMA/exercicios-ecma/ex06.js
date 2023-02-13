//crie um programa que use a nova sintaxe de arrow functions do ECMAScript6
//para definir uma função que calcule o valor 
//de juros compostos de uma quantia de dinheiro

// let valor = 100
// let taxa = 1.0
// let juros = (valor, taxa) => valor * taxa / 10

function calcularJuros(...calcular){
     console.log(calcular);
}

calcularJuros = (...calcular) => console.log(calcular);
 calcularJuros((1000* 1.0) /10);
 console.log(calcularJuros);