import React from 'react';
import './inicio.css'; // Importa el archivo CSS para los estilos

function Inicio() {
  return (
    <div className="inicio">
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
      <div className="contenido">
        {/* Contenido de la página */}
      </div>
    </div>
  );
}

export default Inicio;
