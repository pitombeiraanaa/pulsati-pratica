// verificar o tipo de variavel
let nome = 'Ana';
console.log(typeof nome);


//conversões de tipo 
let numero1 = "1";
let numero2 = 2;

parseInt(numero1);
parseFloat(numero1); // converte para number mantendo as casas decimais
String(numero2) //converte para string
Number(numero1) //converte para number

//classe Matematica 

Math.pow // potencia
 
//diferença entre == e === 
2 == '2' // true
2 === '2' //false

//Arrow Functions 
function name(params) {}
const somar = () => {}
somar();

//operador ternario 

let nome2 = "maria";
if(nome2.length>5){
    console.log("nome maior que 5 letras");
}else{
    console.log("nome menor que 5 letras");
}


//fazendo o operador ternario 
nome2.length > 5? console.log("nome maior que 5 letras") : console.log("nome menor que 5 letras");


//For in (pega o indice de cada elemento dentro do array, consegua manipular o array original) &
// For of(recebe direto o valor do array e não consegue modificar, usado para fazer verificação, não mexe no array original)
let frutas = ["banana", "maçã", "pera", "uva"];
for(let i = 0; i < frutas.length; i++){
frutas[i];
}

for (const indice in frutas){
    console.log(frutas[indice]);
}

for(const fruta of frutas){
console.log(fruta);
}

//concatenar usando função
let empresa = "Pulsati";
empresa = empresa.concat("Desenvolvimento Web");

//CharAt (faz um array e pega a letra do indice indicado)
let primeiraLetra = empresa.charAt(0);

//indexOf (pega o indice do elemento dentro do array)
let posicaoDoI = empresa.indexOf("i");

//Trim (remove os espaços em branco da string nos cantos)
let empresaLimpa = empresa.trim();

//substring
let escola = "Luiz Delfino";
// let primeiroNome = escola.substring(0,4);

//ou 
let primeiroNome = escola.substring(0,4);
let ultimoNome = escola.substring(5);

//split
let linha = "johnny;johnny@gmail.com;99212344"
let dados = linha.split(";");

console.log(dados[0]);
console.log(dados[1]);
console.log(dados[2]);

//join
dados[0] = "josé";
let linhaAlterada = dados.join(";");


//StartWith Ends With
let escola2 = "Apex";
escola2.startsWith("A"); // True
escola2.endsWith("ex"); //True


//toUpperCase e toLowerCase
let nome3 = "Ana";
nome3.toUpperCase();
nome3.toLowerCase();

//Replace (troca uma letra pela outra)
nome3.replace('a','e'); // ene

//Arrays
let nomes = [];

nomes.push("Ana");
nomes.push("Maria");
nomes.push("José");
nomes.splice(0,1);

nomes.pop();

//Sort palavras
let nomes1 = [];

nomes1.push("Ana");
nomes1.push("Maria");
nomes1.push("José");
nomes1.splice(0,1);

nomes1.pop();
let nomesOrdenados = nomes1.sort().reverse();


//Sort numeros
let numeros = [ 10, 1, 20, 50, 5, 70, 1, 90];
let numerosOrdenados = numeros.sort((a,b) => {
    return a - b;
});

//Map (retorna um novo array com os dados modificados)
let numeros2 = [1,2,3,4,5,6,7,8,9,10];
let numerosMultiplicados = numeros2.map((numero) => {
    return numero * 2;
});

let numerosPares = numero2.filter((numero)=> {
    return numero % 2 ===0;
});

let existeAlgumPar = numeros2.some((numero) => {
    return numero % 2 === 0;
})





























