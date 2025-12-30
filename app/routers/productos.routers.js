const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controllers.js');

// Crear producto con imagen
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	}
});
const upload = multer({ storage: storage });
router.post('/', upload.single('imagen'), productoController.create);
// Obtener todos los productos
router.get('/', productoController.findAll);
// Obtener un producto por ID
router.get('/:id_producto', productoController.findOne);
// Actualizar producto
router.put('/:id_producto', productoController.update);
// Eliminar producto
router.delete('/:id_producto', productoController.delete);

module.exports = router;
