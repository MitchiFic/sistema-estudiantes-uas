import React, { useState } from 'react';
import axios from 'axios';

function StudentForm({ onStudentRegistered }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/estudiantes', formData);
      onStudentRegistered(); // para refrescar lista u otra acción
      setFormData({ nombre: '', correo: '', telefono: '', direccion: '' });
    } catch (error) {
      console.error('Error al registrar estudiante:', error);
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="mb-3">Registrar Estudiante</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" name="correo" value={formData.correo} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input type="text" className="form-control" name="direccion" value={formData.direccion} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
}

export default StudentForm;
