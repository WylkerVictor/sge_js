const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Detalhepedidos = require('./detalhepedidos');

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

Produto.hasMany(Detalhepedidos, { foreignKey: 'produto_id' });

module.exports = Produto;