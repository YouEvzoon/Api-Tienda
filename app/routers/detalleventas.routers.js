const express = require('express');
const router = express.Router();
const detalleVentas = require('../controllers/detalleventas.controllers.js');

// Create a new DetalleVenta
router.post('/', detalleVentas.create);

// Retrieve all DetalleVentas
router.get('/', detalleVentas.findAll);

// Retrieve a single DetalleVenta with id
router.get('/:id', detalleVentas.findOne);

// Update a DetalleVenta with id
router.put('/:id', detalleVentas.update);

// Delete a DetalleVenta with id
router.delete('/:id', detalleVentas.delete);

module.exports = router;