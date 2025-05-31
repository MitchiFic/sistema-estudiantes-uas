#Sistema de Gestión de Estudiantes - UAS

Aplicación web CRUD desarrollada como proyecto final de la materia **Desarrollo Web del Lado del Servidor** en la Universidad Autónoma de Sinaloa.

---

## Datos académicos

- **Materia:** Desarrollo Web del Lado del Servidor  
- **Profesor:** José Manuel Cazarez Alderete
- **Alumno:** Franciella Mitchelle Martínez Orozco  
- **Grupo:** 2-3

---

## Tecnologías utilizadas

**Frontend:**
- React
- Bootstrap
- Axios

**Backend:**
- Node.js
- Express.js
- SQLite3

---

## Capturas de pantalla

### Vista principal del sistema
![Vista principal](screenshots/vista-principal.png)

### Registro de estudiante
![Formulario](screenshots/formulario-registro.png)

### Búsqueda activa
![Filtro](screenshots/filtro-busqueda.png)

### Edición de estudiante
![Edición](screenshots/editar-estudiante.png)

### Código: Frontend (`App.js`)
![App.js Parte 1](screenshots/codigo-app-1.png)  
![App.js Parte 2](screenshots/codigo-app-2.png)  
![App.js Parte 3](screenshots/codigo-app-3.png)

### Código: Backend (`routes/estudiantes.js`)
![Backend Parte 1](screenshots/codigo-backend-1.png)  
![Backend Parte 2](screenshots/codigo-backend-2.png)


---

## Estructura del proyecto

```
sistema-estudiantes-uas/
├── backend-estudiantes/
│   ├── db/
│   ├── routes/
│   └── server.js
├── frontend-estudiantes/
│   ├── src/components/
│   ├── public/
│   └── App.js
├── screenshots/
└── README.md
```

---

## Instrucciones para ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/MitchiFic/sistema-estudiantes-uas.git
cd sistema-estudiantes-uas
```

### 2. Instalar y ejecutar backend

```bash
cd backend-estudiantes
npm install
node server.js
```

> Servidor backend en http://localhost:3000

### 3. Instalar y ejecutar frontend

```bash
cd ../frontend-estudiantes
npm install
npm start
```

> Interfaz en http://localhost:3001

---

## Notas

- La aplicación incluye un diseño visual institucional (colores UAS, logo, encabezado y footer).
- El sistema permite registrar, editar, eliminar y buscar estudiantes fácilmente.
- Toda la información se guarda en una base de datos SQLite.

---

## Universidad Autónoma de Sinaloa

Proyecto con fines académicos.  
Sistema desarrollado con cariño por Franciella Martínez 💻✨
