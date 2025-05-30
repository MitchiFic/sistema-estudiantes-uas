import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EstudianteList({ estudiantes, onEdit, onDelete }) {
  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Lista de Estudiantes</h4>
      {estudiantes.length === 0 ? (
        <p>No hay estudiantes registrados.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((est) => (
              <tr key={est.id}>
                <td>{est.nombre}</td>
                <td>{est.correo}</td>
                <td>{est.telefono}</td>
                <td>{est.direccion}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(est)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(est.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EstudianteList;
