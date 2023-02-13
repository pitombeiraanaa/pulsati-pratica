//crie um programa que use as novas string templates do ECMAScript6 para concatenar duas strings sem o uso de operador de adição

const imprimirNome = ({
    nome,
    sobrenome}) => {

     console.log(`${nome } ${sobrenome}`)
}

imprimirNome({
    nome: 'Ana',
    sobrenome: 'Silva'
})