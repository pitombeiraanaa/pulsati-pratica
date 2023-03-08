interface Pessoa{
    nome:string;
    cpf;
}

class pessoaFisica implements Pessoa{
    nome: string;
    constructor(nome?: string){
        this.nome = nome || 'Não definido';
    }
}

const pf = new pessoaFisica();

class Adulto extends pessoaFisica{
 inss:string = ' ';
}