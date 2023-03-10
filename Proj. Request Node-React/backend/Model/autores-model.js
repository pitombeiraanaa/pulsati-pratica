const {Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Autor extends Model {}
Autor.init({
    codigoAutor: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.STRING, // PERGUNTAR COMO FAZ COM DATE
        allowNull: false
    },
}, {
    sequelize: dbConfig(),
    modelName: "Ana_autores_ana",
    timestamps: false
})

exports.Autor = Autor;

