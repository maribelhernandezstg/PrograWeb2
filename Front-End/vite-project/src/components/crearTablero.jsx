import React from 'react';
import './crearTablero.css'; // Importa el archivo CSS para los estilos

function CrearTablero() {
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
          <li><a href="/">Inicio</a></li>
          <li><a href="/favoritos">Favoritos</a></li>
          <li><a href="/perfil">Perfil</a></li>
        </ul>
      </nav>
      <div className="formulario-container">
        <h1>Crear Tablero</h1>
        <form className="contenido">
          <div className="form-group">
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="imagen">Imagen:</label>
            <input type="file" id="imagen" name="imagen" accept="image/*" />
          </div>
          <div className="button-container">
            <button type="submit">Aceptar</button>
            <button type="button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearTablero;
