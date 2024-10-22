const Pedido = require('../models/pedido');

exports.criarPedido = async (req, res) => {
    try {
        const { cliente_id } = req.body;
        const pedidos = await Pedido.create({ cliente_id });
        res.status(201).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido'});
    }
};

exports.todosPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedido'});
    }
 };

