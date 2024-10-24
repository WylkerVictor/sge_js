const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Detalhepedidos = sequelize.define('Detalhepedidos', {
    detalhe_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    detalhe_valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
    detalhe_desconto: {
        type: DataTypes.FLOAT,
        allowNull: false
        },
        
});

module.exports = Detalhepedidos;