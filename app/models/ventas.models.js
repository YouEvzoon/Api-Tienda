module.exports = (sequelize, Sequelize) => {
  const Ventas = sequelize.define('Ventas', {
    id_venta: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    fecha: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    total: {
      type: Sequelize.DECIMAL(10,2)
    }
  }, {
    tableName: 'Ventas',
    timestamps: false
  });
  return Ventas;
};