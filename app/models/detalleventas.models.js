module.exports = (sequelize, Sequelize) => {
  const DetalleVentas = sequelize.define('DetalleVentas', {
    id_detalle: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_venta: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    id_producto: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cantidad: {
      type: Sequelize.INTEGER
    },
    precio_unitario: {
      type: Sequelize.DECIMAL(10,2)
    }
  }, {
    tableName: 'DetalleVentas',
    timestamps: false
  });
  return DetalleVentas;
};