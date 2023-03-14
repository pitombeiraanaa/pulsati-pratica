const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Livros extends Model { }
Livros.init({
    codigoLivro: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }  
}, {
    sequelize: dbConfig(),
    modelName: 'Ana_livros_nodejs',
    timestamps: false
});



exports.Livros = Livros;