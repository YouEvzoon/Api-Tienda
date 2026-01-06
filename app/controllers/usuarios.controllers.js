const db = require('../config/db.config.js');
const Usuarios = db.Usuarios;

// Crear un nuevo usuario
exports.create = function(req, res) {
  Usuarios.create(req.body)
    .then(usuario => res.status(201).json(usuario))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener todos los usuarios
exports.findAll = function(req, res) {
  Usuarios.findAll()
    .then(usuarios => res.json(usuarios))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener un usuario por ID
exports.findById = function(req, res) {
  Usuarios.findByPk(req.params.id)
    .then(usuario => {
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuario);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Actualizar un usuario
exports.update = function(req, res) {
  Usuarios.update(req.body, { where: { id_usuario: req.params.id } })
    .then(() => res.json({ message: 'Usuario actualizado correctamente' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Eliminar un usuario
exports.delete = function(req, res) {
  Usuarios.destroy({ where: { id_usuario: req.params.id } })
    .then(() => res.json({ message: 'Usuario eliminado correctamente' }))
    .catch(err => res.status(500).json({ error: err.message }));
};