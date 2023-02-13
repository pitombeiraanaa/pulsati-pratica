

// class Usuario {
//      nome = 'Adriano'
//      sobrenome = 'Flach'

//      imprimir(){
//         console.log(this.nome, this.sobrenome);
//      }
// }

// new Usuario().imprimir();


//-----------------------------------
//constructor

// class Usuario {
//     nome = 'Adriano'
//     sobrenome = 'Flach'

//     constructor(nome, sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     imprimir(){
//        console.log(this.nome, this.sobrenome);
//     }
// }

// new Usuario().imprimir();

//--------------------------------------------------
// GET e SET

 setNome(nome) ;{
    this.nome = nome;
}
 imprimir();{
    console.log(this.nome, this.sobrenome);
 }

let usuario = new Usuario('José', 'Silva');
usuario.nome = 'Adriano';
usuario.imprimir();

//-----------------------------------------------
//Herança

class PessoaFisica {
    nome = 'Adriano';
    sobrenome = 'Flach';

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

    class Usuario extends PessoaFisica {
        imprimir(){
            console.log(this.nome, this.sobrenome);
        }
}


let usuario = new Usuario('José', 'Silva');
usuario.nome = 'Adriano';
usuario.imprimir();

//---------------------------------------------------------
