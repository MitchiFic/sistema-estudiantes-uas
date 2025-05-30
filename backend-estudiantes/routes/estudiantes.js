const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET - listar todos
router.get('/', (req, res) => {
  db.all('SELECT * FROM estudiantes', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});



// POST - crear nuevo
router.post('/', (req, res) => {
  const { nombre, correo, telefono, direccion } = req.body;

  if (!nombre || !correo) {
    console.log('Faltan campos requeridos');
    return res.status(400).json({ error: 'Nombre y correo son obligatorios.' });
  }

  // Validar si el correo ya existe
db.get('SELECT * FROM estudiantes WHERE correo = ?', [correo], (err, row) => {
  if (row && !req.body.editando) {
    return res.status(400).json({ error: 'Este correo ya está registrado.' });
  }

});

  db.run(
    `INSERT INTO estudiantes (nombre, correo, telefono, direccion) VALUES (?, ?, ?, ?)`,
    [nombre, correo, telefono, direccion],
    function (err) {
      if (err) {
        console.error('Error al insertar:', err.message); // ENCONTRAR EL ERROR
        return res.status(500).json({ error: err.message });
      }
      console.log('Estudiante insertado con ID:', this.lastID);
      res.status(201).json({ id: this.lastID });
    }
  );
});


// PUT - actualizar
router.put('/:id', (req, res) => {
  const { nombre, correo, telefono, direccion } = req.body;
  const { id } = req.params;
  db.run(
    `UPDATE estudiantes SET nombre = ?, correo = ?, telefono = ?, direccion = ? WHERE id = ?`,
    [nombre, correo, telefono, direccion, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

// DELETE - eliminar
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM estudiantes WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
