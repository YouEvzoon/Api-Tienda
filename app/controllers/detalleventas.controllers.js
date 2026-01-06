const db = require('../config/db.config.js');
const DetalleVentas = db.DetalleVentas;

// Create and Save a new DetalleVenta
exports.create = (req, res) => {
  DetalleVentas.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred while creating the DetalleVenta." }));
};

// Retrieve all DetalleVentas
exports.findAll = (req, res) => {
  DetalleVentas.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred while retrieving DetalleVentas." }));
};

// Find a single DetalleVenta with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  DetalleVentas.findByPk(id)
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({ message: `DetalleVenta with id=${id} not found.` });
    })
    .catch(err => res.status(500).send({ message: `Error retrieving DetalleVenta with id=${id}` }));
};

// Update a DetalleVenta by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  DetalleVentas.update(req.body, { where: { id_detalle: id } })
    .then(num => {
      if (num == 1) res.send({ message: "DetalleVenta was updated successfully." });
      else res.send({ message: `Cannot update DetalleVenta with id=${id}. Maybe DetalleVenta was not found or req.body is empty!` });
    })
    .catch(err => res.status(500).send({ message: `Error updating DetalleVenta with id=${id}` }));
};

// Delete a DetalleVenta with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  DetalleVentas.destroy({ where: { id_detalle: id } })
    .then(num => {
      if (num == 1) res.send({ message: "DetalleVenta was deleted successfully!" });
      else res.send({ message: `Cannot delete DetalleVenta with id=${id}. Maybe DetalleVenta was not found!` });
    })
    .catch(err => res.status(500).send({ message: `Could not delete DetalleVenta with id=${id}` }));
};