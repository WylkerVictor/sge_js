const express = require('express');
const router = express.Router();
const detalheController = require('../controllers/detalheController');

router.post('/pedidos', detalheController.criarPedido);
router.get('/pedidos', detalheController.todosDetalhes);


module.exports = router;