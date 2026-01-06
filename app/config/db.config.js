const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: env.pool.max || 5,
    min: env.pool.min || 0,
    acquire: env.pool.acquire || 30000,
    idle: env.pool.idle || 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//db.Customer = require('../models/customer.model.js')(sequelize, Sequelize);
db.Productos = require('../models/productos.models.js')(sequelize, Sequelize);
db.Usuarios = require('../models/usuarios.models.js')(sequelize, Sequelize);
db.Ventas = require('../models/ventas.models.js')(sequelize, Sequelize);
db.DetalleVentas = require('../models/detalleventas.models.js')(sequelize, Sequelize);

// Relaciones entre modelos
db.Ventas.belongsTo(db.Usuarios, { foreignKey: 'id_usuario' });
db.Usuarios.hasMany(db.Ventas, { foreignKey: 'id_usuario' });

db.DetalleVentas.belongsTo(db.Ventas, { foreignKey: 'id_venta' });
db.Ventas.hasMany(db.DetalleVentas, { foreignKey: 'id_venta' });

db.DetalleVentas.belongsTo(db.Productos, { foreignKey: 'id_producto' });
db.Productos.hasMany(db.DetalleVentas, { foreignKey: 'id_producto' });
 
module.exports = db;