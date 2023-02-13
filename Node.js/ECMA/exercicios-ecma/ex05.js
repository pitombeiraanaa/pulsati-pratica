// crie um programa que use a nova sintaxe de classes do ECMAScript6 para definir uma classe "ContaBancaria"
//crie um objeto a partir dessa classe e imprima no console

class ContaBancaria {
  constructor(agencia,conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;  
  }
}

const obj = [
    {agencia: 123, conta: 456, saldo: 100},
    {agencia: 456, conta: 789, saldo: 874},
    {agencia: 789, conta: 987, saldo: 744}
]

for (let i = 0; i < obj.length; i++) {
  const conta = new ContaBancaria(obj[i].agencia, obj[i].conta, obj[i].saldo);
  console.log(conta);
}