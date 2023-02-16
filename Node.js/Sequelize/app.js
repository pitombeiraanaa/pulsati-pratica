const e = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'oracle',
    database: 'xe',
    username: 'system',
    password: 'pulsati2023',
    host: '192.168.0.50',
    port: 1521,
    dalectOptions: {conectTimeout: 3000}
})

const {Model, DataTypes} = require('sequelize');
class Usuario extends Model {}
usuario.init({
    id: {
        type:DataTypes.NUMBER,
        
        
    }
})

