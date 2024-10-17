const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projeto', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;