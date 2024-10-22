const Produto = require('../models/produto');

exports.criarProduto = async (req, res) => {
    try {
        const { nome } = req.body;
        const produto = await Produto.create({ nome });
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto'});
    }
};

exports.excluirProduto = async (req, res) => {
    try {
        const { id } = req.params;
      
        const excluir = await Produto.destroy({where:{id}})

        if (excluir){
            res.status(204).send()
        } else{
            res.status(404).json({error: 'Produto não encontrado'})
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao excluir o produto'})
    }

};

 exports.alterarProduto = async (req, res) => {
     try {
         const { id } = req.params;
         const { nome } = req.body;
         const [updated] = await Produto.update({ nome }, { where: { id }});

         if (updated) {
             const productAtualizado = await Produto.findByPk(id);
             res.status(200).json(productAtualizado);
         } else {
             res.status(404).json({ error: 'Produto não encontrado'});
         }
     } catch (error) {
         res.status(500).json({ error: 'Erro ao alterar produto'});
     }
 };

 exports.todosProdutos = async (req, res) => {
    try {
        const products = await Produto.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos'});
    }
 };