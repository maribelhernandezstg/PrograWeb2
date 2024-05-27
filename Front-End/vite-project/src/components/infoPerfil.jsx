import React, { useContext } from 'react';
import './perfil.css'; // Importa el archivo CSS para los estilos
import { SessionContext } from '../context/sessionContext.jsx';

function Perfil() {
    const { session } = useContext(SessionContext);
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
        <h1>{session.username}</h1>
        <h1>{session.lastName}</h1>
        <h1>{session.email}</h1>
        </div>
        
      </div>
    </div>
  );
}

export default Perfil;
