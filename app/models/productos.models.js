module.exports = (sequelize, Sequelize) => {
	const Productos = sequelize.define('Productos', {
		id_producto: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nombre: {
			type: Sequelize.STRING(100)
		},
		precio_compra: {
			type: Sequelize.DECIMAL(10,2)
		},
		precio_venta: {
			type: Sequelize.DECIMAL(10,2)
		},
		stock: {
			type: Sequelize.INTEGER
		},
		imagen: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		codigo_barra: {
			type: Sequelize.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'Productos',
		timestamps: false
	});
	return Productos;
};
