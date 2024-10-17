const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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


Pedido.associate = (models) => {
    Pedido.belongsTo(models.Cliente,
      { foreignKey: 'cliente_id', as: 'cliente' });
  };

module.exports = Pedido;