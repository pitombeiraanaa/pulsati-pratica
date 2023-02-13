// Crie um programa que use as novas string templates do ECMAScript6 
//para interpolar uma string



const imprimirDados = ({
    nome,
    sobrenome,
    ultimoNome}) => {
        console.log(`${nome} ${sobrenome} ${ultimoNome}`);
    }

    imprimirDados({
        nome: 'Heloisa',
        sobrenome: 'Pitombeira',
        ultimoNome:'Reinhardt'});

    