import React, { useContext } from 'react';
import './perfil.css'; // Importa el archivo CSS para los estilos
import { Link } from 'react-router-dom';
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
          <li><a href="/inicio">Inicio</a></li>
          <li><a href="/favoritos">Favoritos</a></li>
          <li><a href="/perfilUser">Perfil</a></li>
        </ul>
      </nav>
      <div className="perfil-content">
        <div className="foto-perfil">
          <img src="./src/assets/perfil.jpg" alt="Foto de perfil" />
        </div>
        <div className="nombre-usuario">
          <h2>@</h2><h2>{session.username}</h2>
        </div>
        <Link to="/infoPerfil">
          <button className="crear-tablero">Informacion del Perfil</button>
        </Link>
        <div className="botones">
         {/* Redirigir a la página para crear un tablero */}
         <Link to="/crearTablero"><button className="crear-tablero">Crear Tablero</button></Link>
          {/* Redirigir a la página para crear un pin */}
          <Link to="/crearPin"><button className="crear-pin">Crear Pin</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
