const {Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Passageiro extends Model{}
Passageiro.init({
    codigoVoo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
        sequelize: dbConfig(),
        modelName: 'Passageiro',
        timestamps: false
    });

    exports.Passageiro = Passageiro;