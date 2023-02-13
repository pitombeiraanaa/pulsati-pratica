// console.log('ARRAY INCLUDES');

// const nomeCompleto = ['ANA', 'ALICE', 'PITOMBEIRA'];
// console.log(nomeCompleto.length);
// console.log(nomeCompleto[0]);
// console.log(nomeCompleto.indexOf('ANA'));


//------------------------------------------------------------
// find


const nomeCompleto = ['ANA', 'ALICE', 'PITOMBEIRA'];
// console.log(nomeCompleto.length);
// console.log(nomeCompleto[0]);
// console.log(nomeCompleto.indexOf('ANA'));
console.log('FIND');

const resultado = nomeCompleto.find(n => n == 'ANA');
console.log(resultado);




// ---------------------------------------------------------
// buscando objetos com find
const obj = [
    {chave: 1 , valor: 'Opção 1'},
    {chave: 2 , valor: 'Opção 2'},
    {chave: 3 , valor: 'Opção 3'},
    {chave: 4 , valor: 'Opção 4'}]


    const opcaoSelecionada = obj.find(opcao => opcao.chave == 1);
    console.log(opcaoSelecionada);

//------------------------------------------------------------------
console.log('MAP ENTRIES / KEYS / VALUES')
//MAP ENTRIES

const usuario = {
    nome: 'Ana',
    sobrenome: 'Pitombeira',
    idade: 25,
    sexo: 'Feminino'
 }

 console.log(Object.entries(usuario));
 Object.entries(usuario).forEach(dados => console.log(dados));


// ---------------------------------------------------------------------
// KEYS

const imprimir = (...chaves) =>{
    const valores =  chaves.map(chave => usuario[chave]);
    console.log(valores);
}

console.log('imprimir nome e sobrenome');
imprimir('nome', 'sobrenome');




