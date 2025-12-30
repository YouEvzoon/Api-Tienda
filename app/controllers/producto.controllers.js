const db = require('../config/db.config.js');
const Productos = db.Productos;

// Crear un nuevo producto con imagen y código de barra
exports.create = function(req, res) {
  let data = req.body;
  if (req.file) {
    data.imagen = '/uploads/' + req.file.filename;
  }
  Productos.create(data)
    .then(producto => res.status(201).json(producto))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener todos los productos
exports.findAll = function(req, res) {
  Productos.findAll()
    .then(productos => res.json(productos))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener un producto por ID
exports.findOne = function(req, res) {
  Productos.findByPk(req.params.id_producto)
    .then(producto => {
      if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
      res.json(producto);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Actualizar un producto incluyendo código de barra
exports.update = function(req, res) {
  Productos.update(req.body, { where: { id_producto: req.params.id_producto } })
    .then(([updated]) => {
      if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
      return Productos.findByPk(req.params.id_producto);
    })
    .then(producto => {
      if (producto) res.json(producto);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Eliminar un producto
exports.delete = function(req, res) {
  Productos.destroy({ where: { id_producto: req.params.id_producto } })
    .then(deleted => {
      if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
      res.json({ message: 'Producto eliminado' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
};