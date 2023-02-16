const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'oracle',
  database: 'xe',
  username: 'system',
  password: 'pulsati2023',
  host: '192.168.0.50',
  port: 1521, // porta padrao do oracle​
  dialectOptions: { connectTimeout: 30000 }
});

const { Model, DataTypes } = require('sequelize');
class Aeroporto extends Model {}
Aeroporto.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Ana_aeroportos',
  timestamps: false
});

sequelize.sync();

const express = require('express');
const app = express();
app.use(express.json());

app.post('/aeroporto', async (req, res) => {
const {nome} = req.body;
const aeroporto = new Aeroporto()
aeroporto.nome = nome;
await aeroporto.save();
res.json(aeroporto);
});

app.get('/aeroporto/:codigo', async (req, res) => {
const codigo = req.params.codigo;
const aeroporto = await Aeroporto.findByPk(codigo);
res.json(aeroporto);
});

app.put('/aeroporto/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const aeroporto = await Aeroporto.findByPk(codigo);
    const {nome} = req.body;
    usuario.nome=nome;
    await aeroporto.save(usuario);
    res.json(aeroporto);
});

app.delete('/aeroporto/:codigo', async (req, res) => {
const codigo = req.params.codigo;
const aeroporto = await Aeroporto.findByPk(codigo);
await aeroporto.delete();
res.json(aeroporto);
});

app.listen(8000)
