const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const detalheController = require('../controllers/detalhepedidosController');
const pedidoController = require('../controllers/pedidoController');
const productController = require('../controllers/productController');
const usuarioController = require('../controllers/usuarioController');

router.post('/clientes', clientController.criarCliente);
router.get('/clientes', clientController.todosClientes);   
router.put('/clientes/:cliente_id', clientController.alterarCliente);
router.delete('/clientes/:cliente_id', clientController.excluirCliente); 

router.post('/detalhes', detalheController.criarDetalhes);
router.get('/detalhes', detalheController.todosDetalhes);

router.post('/pedidos', pedidoController.criarPedido);
router.get('/pedidos', pedidoController.todosPedidos);

router.post('/produtos', productController.criarProduto);
router.get('/produtos', productController.todosProdutos);   
router.put('/produtos/:id', productController.alterarProduto);
router.delete('/produtos/:id', productController.excluirProduto);

router.post('/usuarios', usuarioController.criarUsuario);
router.get('/usuarios', usuarioController.todosUsuarios);   
router.put('/usuarios/:id', usuarioController.alterarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;