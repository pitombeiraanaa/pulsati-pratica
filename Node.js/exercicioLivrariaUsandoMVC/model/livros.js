const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../config-db").getDbConfig;

/*Atividade 3: Para o cadastro dos livros eu preciso informar o
 título do livro,
 o número da edição, 
 o número com o ano de lançamento, 
 o código da editor e
 o código do autor.*/

class Livros extends Model {}
Livros.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    numeroEdicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    anoLancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    codigoEditora: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    codigoAutor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConfig(),
    modelName: "ANA_livros_MVC",
    timestamps: false,
  }
);
  

exports.Livros = Livros;
