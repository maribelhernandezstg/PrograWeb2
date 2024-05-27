import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './crearTablero.css';

function CrearTablero() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/tableros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titulo, descripcion }),
      });

      if (response.ok) {
        const newTablero = await response.json();
        console.log('Tablero creado:', newTablero);
        navigate('/inicio');
      } else {
        const errorData = await response.json();
        console.error('Error al crear el tablero:', errorData);
      }
    } catch (error) {
      console.error('Error de conexión', error);
    }
  };

  return (
    <div className="crear-tablero-container">
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/log2.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button type="submit">Buscar</button>
        </div>
        <ul className="nav-links">
          <li><a href="/inicio">Inicio</a></li>
          <li><a href="/favoritos">Favoritos</a></li>
          <li><a href="/perfil">Perfil</a></li>
        </ul>
      </nav>
      <div className="formulario-container">
        <h1>Crear Tablero</h1>
        <form className="contenido" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={titulo}
              onChange={handleTituloChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={handleDescripcionChange}
              required
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit">Aceptar</button>
            <button type="button" onClick={() => navigate('/inicio')}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearTablero;
