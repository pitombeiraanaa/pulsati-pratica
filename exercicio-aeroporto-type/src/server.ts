import express from 'express';
import AppDataSource from './config/database';
import { AeroportoController } from './controller/aeroporto-controller';
import { EmpresaAereaController} from './controller/empresaAerea-controller'

AppDataSource.initialize().then(() => {
console.log('Conectado com sucesso ao banco');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/empresaAerea', new EmpresaAereaController().create);
app.get('/empresaAerea/:codigo', new EmpresaAereaController().get);
app.put('/empresaAerea/:codigo', new EmpresaAereaController().update);
app.delete('/empresaAerea/:codigo', new EmpresaAereaController().delete);

app.post('/aeroporto', new AeroportoController().create);
app.get('/aeroporto/:codigo', new AeroportoController().get);
app.put('/aeroporto/:codigo', new AeroportoController().update);
app.delete('/aeroporto/:codigo', new AeroportoController().delete);

app.listen(8000);

}).catch(e => console.log('Erro ao conectar ao banco: ', e))
