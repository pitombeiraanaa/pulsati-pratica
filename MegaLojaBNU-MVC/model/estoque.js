/*
Requisito 3: Deve ter uma forma de controlar o estoque de
todos os produtos (pode ser uma tabela com o código do
produto e a quantidade que existe em estoque);
*/ 

const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../config-db").getDbConfig;

class Estoque extends Model {}
Estoque.init({ 
   idProduto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
   },
   quantidadeProduto:{
    type: DataTypes.INTEGER,
    allowNull: false
   },
},
{
    sequelize: dbConfig(),
    modelName: "Ana_Estoque",
    timestamps: false,
});

exports.Estoque = Estoque;