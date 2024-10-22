const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/clientes', clientController.criarCliente);
router.get('/clientes', clientController.todosClientes);   
//router.put('/clientes/:cliente_id', clientController.alterarCliente);
//router.delete('/clientes/:cliente_id', clientController.excluirCliente); 

module.exports = router;