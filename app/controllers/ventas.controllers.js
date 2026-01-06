const db = require('../config/db.config.js');
const Ventas = db.Ventas;

// Crear una nueva venta
exports.create = function(req, res) {
  Ventas.create(req.body)
    .then(venta => res.status(201).json(venta))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener todas las ventas
exports.findAll = function(req, res) {
  Ventas.findAll()
    .then(ventas => res.json(ventas))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener una venta por ID
exports.findById = function(req, res) {
  Ventas.findByPk(req.params.id)
    .then(venta => {
      if (!venta) {
        return res.status(404).json({ error: 'Venta no encontrada' });
      }
      res.json(venta);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Actualizar una venta
exports.update = function(req, res) {
  Ventas.update(req.body, { where: { id_venta: req.params.id } })
    .then(() => res.json({ message: 'Venta actualizada correctamente' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Eliminar una venta
exports.delete = function(req, res) {
  Ventas.destroy({ where: { id_venta: req.params.id } })
    .then(() => res.json({ message: 'Venta eliminada correctamente' }))
    .catch(err => res.status(500).json({ error: err.message }));
};