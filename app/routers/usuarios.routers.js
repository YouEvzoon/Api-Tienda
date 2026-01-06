const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controllers.js');

// Crear un nuevo usuario
router.post('/', usuariosController.create);

// Obtener todos los usuarios
router.get('/', usuariosController.findAll);

// Obtener un usuario por ID
router.get('/:id', usuariosController.findById);

// Actualizar un usuario
router.put('/:id', usuariosController.update);

// Eliminar un usuario
router.delete('/:id', usuariosController.delete);

module.exports = router;