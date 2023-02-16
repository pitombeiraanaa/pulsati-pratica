const express = require('express');
const Usuario = require('./usuario').Usuario;
const app = express();
const usuarios = [];
let proximoCodigo = 1;

app.use(express.json());

app.post('/usuarios', (req, res) => {
 const {nome,sobrenome} = req.body;
 const usuario = new Usuario(proximoCodigo,nome,sobrenome);
 proximoCodigo++;
 usuarios.push(usuario);
 res.json(usuario);

});

app.get('/usuarios/:codigo', (req, res) => {
   const codigo = req.params.codigo;
   const usuario = usuarios.find(usuario => usuario.codigo === codigo);
   res.json(usuario);
});
    

app.put('/usuarios/:codigo', (req, res) => {
  const codigo = req.params.codigo;
  const usuario = usuarios.find(usuario => usuario.codigo === codigo);
  const {nome,sobrenome} = req.body;
  usuario.nome = nome;
  usuario.sobrenome = sobrenome;
  res.json(usuario); 
})


app.delete('/usuarios/:codigo', (req, res) => {
 const codigo = req.params.codigo;
 let posicao;
 usuarios.forEach((usuario, index)=> {
    if (usuario.codigo === codigo) {
     posicao = index;
    }
 });
 delete usuarios[posicao];
 res.json({data: "Deletado com sucesso"});
})
app.listen(3000);

