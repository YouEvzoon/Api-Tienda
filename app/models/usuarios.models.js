module.exports = (sequelize, Sequelize) => {
  const Usuarios = sequelize.define('Usuarios', {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(100)
    },
    email: {
      type: Sequelize.STRING(100),
      unique: true
    },
    password: {
      type: Sequelize.STRING(255)
    },
    rol: {
      type: Sequelize.ENUM('cliente', 'admin'),
      defaultValue: 'cliente'
    },
    puntos: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: 'Usuarios',
    timestamps: false
  });
  return Usuarios;
};