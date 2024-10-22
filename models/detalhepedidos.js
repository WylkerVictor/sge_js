const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./pedido');
const Produto = require('./produto');

const Detalhepedidos = sequelize.define('Pedido', {
    detalhe_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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

Pedido.belongsTo(Pedido, { foreignKey: 'pedido_id' });
Pedido.belongsTo(Produto, { foreignKey: 'produtos_id' });

module.exports = Detalhepedidos;