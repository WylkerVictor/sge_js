const Cliente = require('../models/cliente');

exports.criarCliente = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const cliente = await Cliente.create({ nome, email });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente'});
    }
};

// exports.excluirCliente = async (req, res) => {
//     try {
//         const { cliente_id } = req.params;
      
//         const excluir = await Cliente.destroy({where: { cliente_id }})

//         if (excluir){
//             res.status(204).send()
//         } else{
//             res.status(404).json({error: 'Cliente não encontrado'})
//         }
//     } catch (error) {
//         res.status(500).json({error: 'Erro ao excluir o cliente'})
//     }

// };

//  exports.alterarCliente = async (req, res) => {
//      try {
//          const { cliente_id } = req.params;
//          const { nome, email } = req.body;
//          const [updated] = await Cliente.update({ nome, email }, { where: { cliente_id }});

//          if (updated) {
//              const clienteAtualizado = await Cliente.findByPk(cliente_id);
//              res.status(200).json(clienteAtualizado);
//          } else {
//              res.status(404).json({ error: 'Cliente não encontrado'});
//          }
//      } catch (error) {
//          res.status(500).json({ error: 'Erro ao alterar cliente'});
//      }
//  };

//  exports.todosClientes = async (req, res) => {
//     try {
//         const clientes = await Cliente.findAll();
//         res.status(200).json(clientes);
//     } catch (error) {
//         res.status(500).json({ error: 'Erro ao buscar clientes'});
//     }
//  };