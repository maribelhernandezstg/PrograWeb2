import React, { useContext } from 'react';
import './inicio.css'; // Importa el archivo CSS para los estilos
import {SessionContext} from '../context/sessionContext.jsx';

function Inicio() {
  const { session } = useContext(SessionContext);
  return (
    <div className="inicio">
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/log2.png" alt="Logo" />
          <h1>{session.username}</h1>
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
