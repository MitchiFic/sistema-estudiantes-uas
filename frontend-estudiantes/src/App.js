import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EstudianteForm from './components/EstudianteForm';
import EstudianteList from './components/EstudianteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [editando, setEditando] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const obtenerEstudiantes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/estudiantes');
      setEstudiantes(res.data);
    } catch (error) {
      console.error('Error al obtener estudiantes:', error);
    }
  };

  useEffect(() => {
    obtenerEstudiantes();
  }, []);

  const agregarEstudiante = async (nuevo) => {
    try {
      await axios.post('http://localhost:3000/api/estudiantes', nuevo);
      obtenerEstudiantes();
    } catch (error) {
      console.error('Error al agregar estudiante:', error);
    }
  };

  const actualizarEstudiante = async (id, actualizado) => {
    try {
      await axios.put(`http://localhost:3000/api/estudiantes/${id}`, actualizado);
      setEditando(null);
      obtenerEstudiantes();
    } catch (error) {
      console.error('Error al actualizar estudiante:', error);
    }
  };

  const eliminarEstudiante = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/estudiantes/${id}`);
      obtenerEstudiantes();
    } catch (error) {
      console.error('Error al eliminar estudiante:', error);
    }
  };

  // 🔍 Filtrar estudiantes según búsqueda
  const estudiantesFiltrados = estudiantes.filter(est =>
    est.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    est.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
    <Header />
    <div className="container mt-4">
      

      {/* Input de búsqueda */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por nombre o correo"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Formulario de registro/edición */}
      <EstudianteForm
        onSubmit={editando ? actualizarEstudiante : agregarEstudiante}
        editando={editando}
        setEditando={setEditando}
      />

      <hr />

      {/* Lista de estudiantes */}
            <EstudianteList
        estudiantes={estudiantesFiltrados}
        onEdit={setEditando}
        onDelete={eliminarEstudiante}
      />
    </div>
    <>
    <Footer />
</>

  </>
  );
}

export default App;

