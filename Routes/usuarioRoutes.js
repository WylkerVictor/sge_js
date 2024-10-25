const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.criarUsuario);
router.get('/usuarios', usuarioController.todosUsuarios);   
router.put('/usuarios/:id', usuarioController.alterarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;