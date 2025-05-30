import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-uas d-flex flex-column flex-md-row align-items-center justify-content-between px-4 py-3">
      <div className="text-center text-md-start mb-2 mb-md-0">
        <p className="mb-1">© {new Date().getFullYear()} Universidad Autónoma de Sinaloa</p>
        <p className="mb-1">Materia: Desarrollo Web del Lado del Servidor</p>
        <p className="mb-1">Profesor: José Manuel Cazarez Alderete</p>
        <p className="mb-0">Alumno: Franciella Martínez — Grupo: 2-3</p>
      </div>
      <img src="/uas-logo.png" alt="Logo UAS" className="logo-footer" />
    </footer>
  );
}

export default Footer;
