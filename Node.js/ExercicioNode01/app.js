/*Atividade 1:
- Crie um servidor com express que receba uma requisição
POST para a rota /aeroportos com o nome do aeroporto

- Você deve criar uma classe Aeroporto que tem os
campos código e nome

- No tratamento da requisição POST, você deve criar uma
instância da classe Aeroporto (o campo código deve ser
criado pela própria implementação no servidor) e o
objeto Aeroporto deve ser salvo em uma lista 
*/


const express = require('express');
const { empresasAereas } = require('./empresasAereas');
const Aeroporto = require('./aeroportos').Aeroporto;
const salvarArquivo = require('./arquivo').salvarArquivo;
const lerArquivo = require('./arquivo').lerArquivo;
const deletarArquivo = require('./arquivo').deletarArquivo;
const app = express();
const aeroportos = [];
let codigoAero = 1;


app.use(express.json());

app.post('/aeroportos', (req, res) => {
  const {nome} = req.body;
  const aeroporto = new Aeroporto(nome, codigoAero);
  codigoAero++;
  aeroportos.push(aeroporto);
  res.json(aeroporto);
});


app.get('/aeroportos', (req, res) => {
  res.json(aeroportos);
})

app.put('/aeroportos/:codigo', (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = aeroportos.find(aeroporto => aeroporto.codigo === codigo);
  const nome = req.body;
  aeroporto.nome = nome;
  aeroporto.codigo = codigo;
  res.json(aeroporto);
})


app.delete('/aeroportos/:codigo', (req, res) => {
 const codigo = req.params.codigo;
 let posicao;
 aeroportos.forEach((aeroporto, index) => {
   if(aeroporto.codigo === codigo) {
   posicao = index; 
   }
  });
  delete aeroportos[posicao];
  res.json({data: 'Deletado com sucesso'})
})

app.listen(3000);

