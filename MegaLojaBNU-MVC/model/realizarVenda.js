/*
Requisito 4: Eu quero poder cadastrar uma venda (pode ser 
uma rota para executar venda) onde eu informo o código de 
um vendedor, o código de um produto e a quantidade 
vendida (pode ter uma tabela para registrar as vendas);
*/ 

const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../config-db").getDbConfig;

class Venda extends Model {}
Venda.init({
    idVendedor:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProduto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidadeVendida:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{

sequelize: dbConfig(),
modelName: "Ana_Vendas_Node",
timestamps: false,

});

exports.Venda = Venda;