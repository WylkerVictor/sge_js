const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/produtos', productController.criarProduto);
router.get('/produtos', productController.todosProdutos);   
router.put('/produtos/:id', productController.alterarProduto);
router.delete('/produtos/:id', productController.excluirProduto);

module.exports = router;