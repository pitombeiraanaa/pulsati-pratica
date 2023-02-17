const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../config-db").getDbConfig;

class Autores extends Model {}
Autores.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dataNascimento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConfig(),
    modelName: "ANA_Autores",
    timestamps: false,
  }
);

exports.Autores = Autores;
