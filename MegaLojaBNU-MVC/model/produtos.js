/*
Requisito 2: Criar um CRUD de produtos. Onde deve
ser possível cadastrar as informações de nome,
marca, descrição e valor;*/ 

const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../config-db").getDbConfig;

class Produtos extends Model {}
Produtos.init(
  {
  nomeProduto: {
    type: DataTypes.STRING,
    allowNull: false
  },

  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },

  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },

  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  sequelize: dbConfig(),
  modelName: "Ana_Produtos_Node",
  timestamps: false,
  });

  exports.Produtos = Produtos;
