const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');
const Detalhepedidos = require('./detalhepedidos');

const Pedido = sequelize.define('Pedido', {
    pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        references: {   
            model: 'clientes',
            key: 'cliente_id'
        },
        allowNull: false,
    }
});

Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Pedido.hasMany(Detalhepedidos, { foreignKey: 'pedido_id' });


module.exports = Pedido;