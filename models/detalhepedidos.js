const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./pedido');
const Produto = require('./produto');

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

// Detalhepedidos.belongsTo(Pedido, { foreignKey: 'pedido_id' });
// Detalhepedidos.belongsTo(Produto, { foreignKey: 'produto_id' });

module.exports = Detalhepedidos;