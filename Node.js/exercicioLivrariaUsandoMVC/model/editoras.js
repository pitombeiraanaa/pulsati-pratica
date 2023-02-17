const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../config-db").getDbConfig;

/* Atividade 2: Preciso cadastrar todas as editoras dos livros.
 Eu quero poder informar o nome 
 e cnpj da editora.
 Sabemos que no nosso cadastro manual, podemos correr o risco de errar, então eu necessito poder alterar
 qualquer dado da editora 
 e também quero poder listar todas elas.*/

class Editoras extends Model {}
Editoras.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

   CNPJ: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
},
{
    sequelize: dbConfig(),
    modelName: "ANA_Editoras",
    timestamps: false,
});

exports.Editoras = Editoras;