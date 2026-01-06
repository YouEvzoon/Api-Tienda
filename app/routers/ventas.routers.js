const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas.controllers.js');

// Crear una nueva venta
router.post('/', ventasController.create);

// Obtener todas las ventas
router.get('/', ventasController.findAll);

// Obtener una venta por ID
router.get('/:id', ventasController.findById);

// Actualizar una venta
router.put('/:id', ventasController.update);

// Eliminar una venta
router.delete('/:id', ventasController.delete);

module.exports = router;