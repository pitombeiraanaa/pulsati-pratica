/* Requisito 1: Criar um CRUD para o cadastro de
vendedores. Deve ser possível informar o nome, cpf,
telefone e endereço. Deve ser gerado um 'id' para
cada vendedor;*/

const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../config-db").getDbConfig;

class Vendedores extends Model {}
Vendedores.init({

  idVendedor:{
    type: DataTypes.NUMBER,
    primaryKey: true,
     autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  sequelize: dbConfig(),
  modelName: "Ana_Vendedores",
  timestamps: false,
 
});

exports.Vendedores = Vendedores;
