// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Produto = sequelize.define('Produto', {
//     id: {
//         type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    // nome: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },

    // cliente_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'clientes',
    //         key: 'cliente_id'
    //     },
    //     allowNull: false,
    // }
// });

// Produto.associate = (models) => {
//     Produto.belongsTo(models.Cliente,
//       { foreignKey: 'cliente_id', as: 'cliente' });
//   };


// module.exports = Produto;