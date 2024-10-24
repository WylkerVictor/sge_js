const Detalhepedidos = require('../models/detalhepedidos');

exports.criarDetalhes= async (req, res) => {
    try {
        const { pedido_id, produto_id, detalhe_valor, detalhe_desconto } = req.body;
        const detalhepedidos = await Detalhepedidos.create({ pedido_id, produto_id, detalhe_valor, detalhe_desconto });
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

