const Detalhepedidos = require('../models/detalhepedidos');

exports.criarPedido = async (req, res) => {
    try {
        const { pedido_id, produto_id } = req.body;
        const detalhepedidos = await Pedido.create({ pedido_id, produto_id });
        res.status(201).json(detalhepedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar detalhes'});
    }
};

exports.todosDetalhes = async (req, res) => {
    try {
        const detalhepedidos = await Detalhepedidos.findAll();
        res.status(200).json(detalhepedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar detalhes'});
    }
 };

