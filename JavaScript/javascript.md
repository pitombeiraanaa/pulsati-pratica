## Aula01

---

## O que é JavaScript?

```text
É uma linguagem interpretada pelos navegadores com
tipagem dinamica para suas variaves e retornos
utilizada para interação com o usuário em sua essência
```

## Como usar o JavaScript em suas páginas

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemplo</title>
   </head>
   <body>
      <script src="arquivo.js"></script>

      <script>
         codigo JavaScript
      </script>
   </body>
</html>
```

## Tipos de dados

```text
Os tipos de dados em Javascript são divididos
basicamente em 2 grupos
denominados Tipos Primitivos e Tipos Objeto.
```

---

### Tipos de Dados Primitivos

Boolean
Representa um valor lógico verdadeiro(true) ou falso(false).
Exemplo:

```js
let EhMaiorIdade = true;
```

Null
Representa a atribuição de um valor nulo.
Exemplo:

```js
let valorInicial = null;
```

Undefined
Representa um valor não definido.
Exemplo:

```js
let totalDePontos = undefined;
```

Number
Representa um valor numérico inteiro (int) ou real(float).
Exemplo:

```js
let pi = 3.1416;
let idade = 18;
```

String
Representa um valor do tipo texto.
Exemplo:

```js
var nomeCurso = 'Academia Frontend';
```

### Tipos de Dados Objeto

```text
Objetos são estruturas de dados que possuem propriedades e comportamentos.
Essas estruturas são utilizadas para realizarmos o mapeamento
de objetos da vida real para o mundo computacional.
Em um capítulo posterior entraremos em mais detalhes
quanto a criação e utilização de objetos.
```

### typeof()

```js
// para vermos o tipo da variavel basta utilizar
// o operador typeof(variavel)

let dados = 'teste';
console.log(typeof dados);
// vai escrever no console      String
```

---

## Declaração de Variáveis

Em Javascript podemos declarar uma variável
utilizando os símbolos `var`, `let` e `const`
mais o nome do identificador.

`Símbolo var`

O símbolo `var` foi utilizado desde o início da linguagem para a definição de variáveis. Variáveis declaradas com
o símbolo var possuem seu escopo definido dentro do contexto de execução e sua sintaxe é definida conforme
exemplo abaixo:
Exemplo:
`var nomeCurso="Academia Frontend"`

---

`Símbolo let`

O símbolo let foi introduzido na linguagem na especificação ES6 (EcmaScript 2015). Variáveis declaradas com o
símbolo let possuem um escopo de bloco e devem ser preferencialmente utilizadas durante a definição de
variáveis.
Exemplo:

`let nomeCurso="Academia Frontend"`

---

`Símbolo const`

O símbolo const foi introduzido na linguagem na especificação ES6 (EcmaScript 2015). Variáveis declaradas com
o símbolo const não podem ser alteradas e devem declarar o seu valor no momento da definição da variável.
Exemplo:

`cons PI=3.1416;`

---

## Regras de nomenclatura de um identificador

Uma variável deve começar com uma letra, sublinhado(\_) ou cifrão($), caracteres subsequentes podem ser
letras de “a” até “z” ,”A” até “Z” ou dígitos(0-9). Javascript é Case Sensitive , ou seja, diferencia entre letras
minúsculas e maiúsculas.

---

## Escopo de variáveis

O escopo de uma variável indica em qual nível uma determinada variável é acessível.

`Escopo de bloco`
Variáveis declaradas dentro de um bloco de código específico, serão reconhecidas apenas dentro desse bloco.
Este tipo de escopo é utilizado para variáveis definidas com símbolo let.

`Escopo de contexto de execução`
Variáveis declaradas dentro de uma função serão acessíveis em qualquer nível da função. Este tipo de escopo é
utilizado para variáveis definidas com símbolo var.

`Escopo global`
Variáveis declaradas fora de blocos ou funções possuem o escopo global e podem ser acessadas em qualquer
nível do código. Variáveis declaradas sem a utilização de símbolo (var,let ou const) são elevadas ao escopo
global`

---

## Conversões de tipos

```js
// Converter string para numero

//inteiro
parseInt(variavel);

//numero com . exemplo 1.75
parseFloat(variavel);

// string
String(variavel);

//Number
Number(variavel);
```

---

## Matematica em JavaScript

```js
+ Adição
- Subtração
* Multiplicação
/ Divisão
% Resto da divisão
++ Incremento
-- Decremento

// Precedencia de operadores
(* /) % (+ -)
```

---

## Objeto Math

```js
Para algumas operações podemos utilizar algumas das funções do objeto Math.
Math.PI; // retorna o valor de Pi.

Math.pow(5,2); //retorna o valor de 5 elevado na 2ª potência

Math.random(); // retorna um número aleatório entre 0 e 1

Math.sqrt(16); // retorna o valor da raiz quadrada de 16

```

---

## Operadores de Comparação

```js
< Menor que
<= Menor ou igual que
> Maior
>= maior ou igual a
!= diferente de
== igual a (valores)
=== igual a (valor e tipo)
```

---

## Operadores Lógicos

```js

&& E
|| ou
! Não
^ Exclusivo retorna verdadeiro se as 2 forem verdadeiros
```

---

## Funções

São blocos de códigos que podem ser reaproveitados
ao decorrer do programa. que podem ou não retornar valor

```js
function nome_da_funcao(lista_de_parametros) {
   //corpo da função
}

function soma(a, b) {
   return a + b;
}
```

### Funções Anonimas

Funções anônimas são funções criadas sem a definição de nome.

```js
let soma = function (a, b) {
   return a + b;
};

console.log(soma(1, 2));
```

---

## Estruturas de controle

`IF / ELSE`

```js
let desconto = true;

if (desconto == true) {
   // Executa o código aqui dentro
} else {
   //se nao executa esse aqui
}
```

`Operador Ternário`

```js
let idade = 17;

let mensagem = idade >= 18 ? 'Maior' : 'Menor';
```

`Switch Case`

```js
let expressao = 1;

switch (expressao) {
   case 1:
      console.log(1);
      break;
   case 2:
      console.log(2);
      break;
   default:
      console.log('Outro valor');
}
```

`While`

```js
/*
O operador while é utilizado quando queremos repetir algum trecho
de código enquanto uma determinada condição seja verdadeira
*/
let count = 0;

while (count < 10) {
   console.log(count);
   count++;
}
```

`For`

```js
/*
A estrutura de controle for é utilizada quando queremos repetir algum 
trecho de código em um número determinado de vezes.
*/

for (let count = 0; count < 10; count++) {
   console.log(count);
}
```

`For com of`

```js
/*
O operador for .. of foi adicionado no ES6 e tem por finalidade 
percorrer os valores de um objeto iterável
*/
let frutas = ['Maçã', 'Banana', 'Abacaxi'];

for (let fruta of frutas) {
   console.log(fruta);
}
```

---

## Manipulação de texto

`Forma Literal`

Para declarar um texto em Javascript de forma literal podemos utilizar aspas simples ou aspas duplas.
No exemplo abaixo as duas declarações estão corretas.

```js
let nome = 'João';
let email = 'joao@teste.com';
```

`Length`

Retorna a quantidade de caracteres em um texto.

```js
//Exemplo
let escola = 'Apex ensino';
console.log(escola.length); // retorna 11
```

`Concat`
Retorna um novo texto com o resultado da união do texto base com o texto passado como parâmetro da função.

```js
//Exemplo

let nome = 'João';
let sobrenome = ' da Silva';
let nomeCompleto = nome.concat(sobrenome);
console.log(nomeCompleto); //escreve 'João da Silva'.
```

`charAt`
Retorna o caractere da posição informada.

```js
let escola = 'APEX';
console.log(escola.charAt(0));
//retorna a letra A (primeira letra do texto)
```

`indexOf`
Retorna o índice em que se encontra um determinado caracter.
Caso o caracter informado não exista retorna o valor -1;

```js
let escola = 'Apex';
console.log(escola.indexOf('e')); // retorna 2
```

`trim`
Retorna uma nova String sem os caracteres em branco do início
e do fim do texto.

```js
let nome = ' Maria ';
console.log(nome.trim()); //retorna ‘Maria’
```

`substring`
Retorna uma nova string a partir de um subconjunto da string original
passando de um ponto ou de quanto até quando cortar da string

```js
console.log('Maria'.substring(2)); // retorna 'ria'
console.log('Maria'.substring(0, 2)); // retorna 'Ma'
```

`split`
Cria um array com a separação do texto conforme o parâmetro informado

```js
let linha = 'Eva;eva@teste.com;33221100';
let dados = linha.split(';');
console.log(dados[0]); //Eva
console.log(dados[1]); //eva@teste.com
console.log(dados[2]); // 33221100
```

`startsWith  endsWith`
Funções adicionadas na versão ES6 e determina se o texto inicia ou termina com os caracteres informados no parâmetro.

```js
Console.log('Apex'.startsWith('A')); //true
Console.log('Apex'.endsWith('M')); //false
```

`toLowerCarse toUpperCase`
Funções que convertem a string para versões minusculas e maiusculas

```js
console.log('AbAcAXI'.toUpperCase()); // ABACAXI
console.log('AbAcAXI'.toLowerCase()); // abacaxi
```

`replace`
Retorna uma nova string com a substituição de parte do texto pelos parâmetros informados

```js
console.log('Cristiano'.replace('o', 'e')); //Cristiane
```

`template String`
Template string é um recurso adicionado no ES6 e serve para criarmos templates através de textos que podem
ser completados com valores de variáveis.

```js
let nome = 'Johnny';
let sobrenome = 'Seubert';

console.log(`${nome} ${sobrenome}`); // Johnny Seubert
```

---

## Arrays / Vetores / Lista

São listas que armazenas valores do mesmo tipo que podem ser acessados
por posição entre [] começando pela posição 0

```js

let comidas = ['maça', 'banana', 'abacaxi']

console.log(comidas[0]) //maça
console.log(comidas[1]) // banana
console.log(comidas[2]) // abacaxi

-----------------------------------------

let idades = [20, 35, 44]

console.log(idades[0]) //20
console.log(idades[1]) // 35
console.log(idades[2]) // 44
```

`Adicionar elementos a um array`

```js
let nomes = ['Maria'];

nomes.push('Johnny');

console.log(nomes[1]); //Johnny
```

`Remover elementos do array`

```js
//Remover do inicio do array
let nomes = ['Johnny', 'Maria'. 'Rafaela', 'Camila']

nomes.shift()
nomes = ['Maria', 'Rafaela', 'Camila']


//Remove do fim do array
nomes.pop()
nomes = ['Maria', 'Rafaela']


//remover de uma posição especifica
nomes.splice(0,1) // começa na posição 0 e remove 1
nomes = ['Rafaela']


//para copiar um array podemos utilizar a função slice
let nomes2 = nomes.slice();
nomes2 = ['Rafaela']
```

`Transformar um array`
Para transformar um array em texto podemos utilizar a função join

```js
let nomes = ['Adão', 'Eva', 'José', 'Maria'];

console.log(nomes.join('->')); //escreve Adão->Eva->José->Maria
```

`Ordenar array`

```js
let comidas = ['banana', 'maça', 'abacaxi'];

console.log(comidas.sort()); // [ 'abacaxi', 'banana', 'maça' ]

let numeros = [5, 3, 7, 1, 10];

numeros.sort(function (num1, num2) {
   if (num1 > num2) {
      return 1;
   } else if (num1 == num2) {
      return 0;
   } else {
      return -1;
   }
});

console.log(numeros);
```

---

## Funções de Array e listas

`FUNÇÃO MAP`

A função map é como se fosse um for que percorre todo o array e executa uma função

```js
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// MAP
let numerosMultiplicados = numeros.map(function (numero) {
   return numero * 2;
});
```

<br>

`Filtrar um array`
A função Filter é como se fosse um for que percorre todo o array e apenas retorna aquilo que satisfaz a condição

```js
let nomes = ['Luciana', 'Eva', 'Juriscleide', 'Maria'];

let nomesGrandes = nomes.filter(function (nome) {
   return nome.length > 5;
});
```

`Verificar se um array contém um valor`
A função some verifica se algum valor do array satisfaz a condição

```js
let nomes = ['Luciana', 'Eva', 'Juriscleide', 'Maria'];

let existeMaria = nomes.some(function (nome) {
   return nome == 'Maria';
});

existeMaria == true;
```

## Objetos

`Declarar um objeto`

```js
let pessoa = {};

pessoa.nome = 'Johnny'; // Adiciona a propriedade nome ao objeto
```

--- Exercicios

## Aula 02

-  Exercicios sem DOM

---

## Aula 03

## Arrow Functions

Arrow Function foi introduzida na versão ES6, e possui uma sintaxe mais curta que a declaração de uma função

```js
//função normal
function NomeDaFuncao(Parametros) {
   //Código
}

//Arrow Function
const variavel = (parametros) => {
   //Códigos
};
```

## Manipulação do DOM

Muitas vezes necessitamos buscar, alterar, adicionar ou remover informações contidas dentro de uma página html.

Para que possamos realizar esse tipo de tarefa, o Javascript possui alguns métodos que podem no auxiliar na manipulação do `Document Object Model` (DOM).

O DOM é basicamente uma árvore de componentes com todas as suas ramificações, desta forma é possível
navegar nesta árvore e encontrar as informações desejadas.

Para poder manipular o DOM, o Javascript nos fornece um objeto implícito chamado document. Este objeto
possui uma série de funções para a manipulação do documento.

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" />
      <title>Título</title>
      <style>
         .azul {
            color: blue;
         }

         .verde {
            color: green;
         }
      </style>
   </head>

   <body>
      <h1 id="titulo">Título grande</h1>
      <h3>Subtítulo</h3>
      <h4>Nome</h4>
      <ul id="listaNomes">
         <li class="verde">Adão</li>
         <li class="azul">Eva</li>
         <li class="verde">João</li>
         <li class="azul">Maria</li>
      </ul>
      <form>
         <label>Nome</label>
         <input id="txtNome" name="txtNome" value="teste" />
         <button type="submit">Enviar</button>
      </form>

      <script src="script.js"></script>
   </body>
   <html></html>
</html>
```

---

## Manipulando elementos da página através de seu id

Para acessar os elementos da página através do seu id podemos utilizar a função `document.getElmentById('nome do id')`.
Esta função nos retorna um objeto que contém as informações do elemento desejado.

```js
var elemento = document.getElementById('titulo');
console.log(elemento.innerHTML); // retorna "Título grande"
```

---

## Manipulando elementos da página através da sua classe

Para acessar os elementos da página através da sua classe podemos utilizar a função `document.getElementsByClassName('nome da classe')`.

Esta propriedade recebe uma lista com todos os itens que tiverem a classe
pois uma classe podemos ter em mais de um elemento na tela

```js
let lista = document.getElementsByClassName('verde');
console.log(lista[0]);
```

---

## Manipulando elementos da página através da sua tag

Para acessar os elementos da página através do seu id podemos utilizar a função `document.getElementsByTagName('tag do html exemplo h1')`.

Esta propriedade recebe uma lista com todos os itens que forem daquela tag
pois uma tag podemos ter em mais de uma na tela.

```js
let lista = document.getElementsByTagName('li');
console.log(lista[0]);
```

---

## Buscando objetos através da função querySelector

A função `document.querySelector('')` serve para buscar algum item na tela podendo ser utilizado como um multi uso pois é possivel buscar id classe ou tag.

```js
let elemento = document.querySelector('#titulo'); // quando for id
let elemento = document.querySelector('.verde'); // quando for classe
let elemento = document.querySelector('h1'); //quando for tag
```

---

## Buscando objetos através da função querySelectorAll

A função querySelectorAll retorna uma lista de objetos no DOM

```js
let lista = document.querySelectorAll('li');
let lista2 = document.querySelectorAll('.verde');
```

---

## Alterar a estilização de um elemento

Para alterarmos a estilização de um elemento podemos alterar as propriedades de estilo através da propriedade `style` do objeto

```js
let elemento = document.querySelector('#titulo');
elemento.innerHTML = 'meu texto';

elemento.style.color = 'red';
```

---

## Como ler o texto de um elemento

Para lermos o valor de um campo `input` utilizamos o .value
quando vamos ler de um elemento normal utilizamos o innerText ou
innerHTML

```js
let input = document.getElementById('txtNome');
let h1 = document.getElementById('titulo');

console.log(input.value);
console.log(h1.innerHTML);
console.log(h1.innerText);
```

## Eventos

Eventos são funções executas pelo navegador em decorrência de ações realizadas pelo usuário ou pelo próprio navegador.

## Principais eventos

`Click` - Disparado quando o mouse é pressionado sobre um elemento.

`Keydown` - Disparado quando a tecla é pressionada para baixo.

`Keyup` - Disparado quando a tecla é liberada.

`Keypress` - Disparado após a tecla ser pressionada e liberada.

`Focus` - Disparado quando um elemento recebe o foco.

`Blur` - Disparado quando um elemento perde o foco.

`MouseOver` - Disparado quando o mouse está sobre o elemento

`Load` - Disparado quando o elemento é carregado.

`window.onload` - Disparado quando o a página é carregada.

## Listesners

Para que possamos ser notificados sobre um determinado evento, devemos nos registrar no elemento passando
uma função de notificação. Esse registro é feito através da função addEventListener.

## Adicionar um listener

```js
//forma 1
let titulo = document.getElementById('titulo');
titulo.addEventListener('mouseover', (event) => {
   console.log('mouse');
});

//forma 2
document.getElementById('titulo').addEventListener('mouseover', (event) => {
   console.log('mouse');
});
```

---

## Trabalhando com Datas

Dentro do JavaScript temos o objeto Date() que nos permite trabalhar com datas.

```js
// Pega a data do momento atual do computador
let data = new Date();

data.getFullYear(); // retorna o ano atual
data.getMonth(); // retorna o mês atual
data.getDate(); // retorna o dia atual
data.getHours(); // retorna a hora atual
data.getMinutes(); // retorna os minutos atual
data.getSeconds(); // retorna os segundos atual
data.getMilliseconds(); // retorna os milisegundos atual
```

---

## Requisições AJAX

Para realizar requisições assíncronas é necessário utilizar o objeto `fetch`.

Na Web possuimos diversos métodos para realizar requisições.

-  `GET` - para buscar informações
-  `POST` - para criar informações
-  `PUT` - para atualizar informações
-  `DELETE` - para deletar informações

```js
// GET
fetch('https://api.github.com/users/diego3g');

// POST
fetch('https://api.github.com/users/diego3g', {
   // Configurações caso senha POST PUT ou DELETE
   method: 'POST',
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify({ DADOS }),
});

// PUT
fetch('https://api.github.com/users/diego3g', {
   method: 'PUT',
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify({ DADOS }),
});

// DELETE
fetch('https://api.github.com/users/diego3g', {
   method: 'DELETE',
});
```

---

## Classes em JavaScript

-  Classes são a parte principal a POO (Programação Orientada a Objetos), no javascript puro ela não é muito utilizada pois as funcionalidades são bem limitadas, este problema é corrigido com o TypeScript.

```js
class Pessoa {
   nome = 'Fixo';

   constructor(idade, email) {
      this.idade = idade;
      this.email = email;
   }

   static showAllData() {
      console.log(
         `${this.nome} tem ${this.idade} anos e seu email é ${this.email}`
      );
   }
}

let lista = [
   new Pessoa('Johnny', 20, 'jbseubert@gmail.com'),
   new Pessoa('Maria', 21, 'nmar@gmail.com'),
];

// Atributos(Variáveis) ou Métodos(Funções) estaticos nao precisam ser instanciados
Pessoa.showAllData();
```

-  Extender dados entre classes

```js
class Animal {
   constructor(name) {
      this.name = name;
   }

   fazerBarulho() {
      console.log(this.name + ' fez barulho');
   }
}

class Cachorro extends Animal {
   constructor(name) {
      super(name); //<==== executa o construtor da Classe extendida no caso Animal
   }

   fazerBarulho() {
      console.log(this.name + ' latiu');
   }
}

const animal = new Animal('Bixo');
const cachorro = new Cachorro('Bob');

animal.fazerBarulho();
cachorro.fazerBarulho();
```
