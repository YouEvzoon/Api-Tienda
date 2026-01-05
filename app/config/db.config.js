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
 
module.exports = db;