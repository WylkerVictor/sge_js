const Produto = require('./produto');
const Cliente = require('./cliente');
const Detalhepedidos = require('./detalhepedidos');
const Pedido = require('./pedido');

Detalhepedidos.belongsTo(Pedido, { foreignKey: 'pedido_id' });
Detalhepedidos.belongsTo(Produto, { foreignKey: 'produto_id' });

Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

Pedido.hasMany(Detalhepedidos, { foreignKey: 'pedido_id' });
Produto.hasMany(Detalhepedidos, { foreignKey: 'produto_id' });