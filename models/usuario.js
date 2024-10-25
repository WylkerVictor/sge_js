const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
        
});

module.exports = Usuario;