const { createPassageiro } = require('./controller/passageiro-controller');
const express = require('express');
const app = express();
app.use(express.json());


app.post('/passageiro', createPassageiro);
app.get('/passageiro', getPassageiro);
app.put('/passageiro', updatePassageiro);
app.delete('/passageiro', deletePassageiro);


app.listen(8000);