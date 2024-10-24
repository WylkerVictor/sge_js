const express = require('express');
const router = express.Router();
const detalheController = require('../controllers/detalhepedidosController');

router.post('/detalhes', detalheController.criarDetalhes);
router.get('/detalhes', detalheController.todosDetalhes);


module.exports = router;