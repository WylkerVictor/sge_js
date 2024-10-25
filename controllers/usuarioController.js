const Usuario = require('../models/usuario');

exports.criarUsuario = async (req, res) => {
    try {
        const { nome, email, password } = req.body;
        const usuario = await Usuario.create({ nome, email, password });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuario'});
    }
};

exports.todosUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuarios'});
    }
 };

exports.excluirUsuario = async (req, res) => {
    try {
        const { usuario_id } = req.params;
      
        const excluir = await Usuario.destroy({where: { usuario_id }})

        if (excluir){
            res.status(204).send()
        } else{
            res.status(404).json({error: 'Usuario não encontrado'})
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao excluir o usuario'})
    }

};

 exports.alterarUsuario = async (req, res) => {
     try {
         const { usuario_id } = req.params;
         const { nome, email, password } = req.body;
         const [updated] = await Usuario.update({ nome, email, password }, { where: { usuario_id }});

         if (updated) {
             const usuarioAtualizado = await Usuario.findByPk(usuario_id);
             res.status(200).json(usuarioAtualizado);
         } else {
             res.status(404).json({ error: 'Usuario não encontrado'});
         }
     } catch (error) {
         res.status(500).json({ error: 'Erro ao alterar usuario'});
     }
 };

