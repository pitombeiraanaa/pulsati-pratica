// console.log('valor padrão para parametros');

// function nomeUsuario(nome, sobrenome = 'Não informado') {
//  console.log(nome, sobrenome);
// }

// nomeUsuario('Adriano', 'Flach');
// nomeUsuario('Adriano')


//-------------------------------------------------------------

// console.log('REST PARAMETERS');

// function nomeUsuario(...nomes) {
//  console.log(nomes);
// }

// nomeUsuario('Adriano', 'Flach', 'de', 'Araujo');
// nomeUsuario('Adriano')


// console.log('REST PARAMETERS');

// function soma(...numero) {
//  console.log(numero[0] + numero[1]);
// }
// soma(1, 1)

// ---------------------------------------------------------------------

// console.log('ARROW FUNCTIONS');

// function nomeUsuario(...nomes) {
//   console.log(nomes);
// }

// nomeUsuario = (...nomes) => console.log(nomes);
// nomeUsuario('Adriano', 'Flach');

// ---------------------------------------------------------------------
console.log('DESTRUCTING PARAMETERS')
const impimirNome = ({nome, sobrenome}) =>{
    const {nome, sobrenome} = objeto;
    console.log(nome, sobrenome);
}
imprimirNome({nome: 'Adriano', sobrenome: 'Flach'});


//-----------------------------------------------------------------------

console.log('STRING TEMPLATES');

const imprimirNome2= ({
    nome,
    sobrenome ='Não informado',
    ultimoNome= 'Não informado'}) =>{
        console.log(`${nome}${sobrenome}${ultimoNome}`);
    }

    imprimirNome2({nome: 'Adriano', sobrenome: 'Flach', ultimoNome: 'Araujo'});

