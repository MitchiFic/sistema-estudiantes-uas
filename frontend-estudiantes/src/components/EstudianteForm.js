import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EstudianteForm({ onSubmit, editando, setEditando }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  });

  useEffect(() => {
    if (editando) {
      setFormData(editando);
    } else {
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        direccion: ''
      });
    }
  }, [editando]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.nombre.trim() || !formData.correo.trim()) {
      alert('Por favor, completa el nombre y el correo.');
      return;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(formData.correo)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (editando) {
      onSubmit(editando.id, formData);
    } else {
      onSubmit(formData);
    }

    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      direccion: ''
    });
  };

  const cancelarEdicion = () => {
    setEditando(null);
    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      direccion: ''
    });
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">{editando ? 'Editar Estudiante' : 'Registrar Estudiante'}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" name="correo" className="form-control" value={formData.correo} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="text" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input type="text" name="direccion" className="form-control" value={formData.direccion} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          {editando ? 'Actualizar' : 'Registrar'}
        </button>

        {editando && (
          <button type="button" className="btn btn-secondary" onClick={cancelarEdicion}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default EstudianteForm;

