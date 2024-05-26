import React from 'react';
import './perfil.css'; // Importa el archivo CSS para los estilos

function Perfil() {
  return (
    <div className="perfil-container">
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
      <div className="perfil-content">
        <div className="foto-perfil">
          <img src="./src/assets/perfil.jpg" alt="Foto de perfil" />
        </div>
        <div className="nombre-usuario">
          <h2>Nombre de Usuario</h2>
        </div>
        <div className="botones">
          <button className="crear-tablero">Crear Tablero</button>
          <button className="crear-pin">Crear Pin</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
