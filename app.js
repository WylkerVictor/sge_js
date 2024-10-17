const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./Routes/clienteRoutes');
const pedidoRoutes = require('./Routes/pedidoRoutes')
const sequelize = require('./config/database');
const Cliente = require('./models/cliente');
const Pedido = require('./models/pedido');

const models = { Cliente, Pedido };
Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
});

const app = express();
app.use(bodyParser.json())
app.use('/api', clientRoutes);
app.use('/api', pedidoRoutes)

const startServer = async () => {
    try {
        await sequelize.sync();
        console.log('Banco de dados conectado.');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    } catch (error) {
        console.error('Erro ao conectar no banco de dados:', error);
    }
};

startServer();