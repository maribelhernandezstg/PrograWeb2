import React, { useState, useEffect, useContext } from 'react';
import './inicio.css'; // Importa el archivo CSS para los estilos
import { SessionContext } from '../context/sessionContext.jsx';

function Inicio() {
  const { session } = useContext(SessionContext);
  const [pines, setPines] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  // Función para obtener los pines desde el servidor
  const obtenerPines = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/pin');
      if (response.ok) {
        const data = await response.json();
        setPines(data);
      } else {
        console.error('Error al obtener los pines');
      }
    } catch (error) {
      console.error('Error al obtener los pines:', error);
    }
  };

  // Función para guardar un comentario en un pin
  const guardarComentario = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/comentarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contenido: nuevoComentario }),
      });
      if (response.ok) {
        console.log('Comentario guardado correctamente');
        // Actualizar la lista de pines después de guardar el comentario
        obtenerPines();
        // Limpiar el input del comentario después de guardarlo
        setNuevoComentario('');
      } else {
        console.error('Error al guardar el comentario');
      }
    } catch (error) {
      console.error('Error al guardar el comentario:', error);
    }
  };

  // Función para agregar el pin actual a favoritos
  const agregarFavorito = async (pinId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/favoritos/${pinId}`, {
        method: 'POST',
      });
      if (response.ok) {
        console.log('Pin agregado a favoritos correctamente');
        // Actualizar la lista de pines después de agregar a favoritos
        obtenerPines();
      } else {
        console.error('Error al agregar el pin a favoritos');
      }
    } catch (error) {
      console.error('Error al agregar el pin a favoritos:', error);
    }
  };

  useEffect(() => {
    // Llama a la función para obtener los pines cuando el componente se monta
    obtenerPines();
  }, []); // El segundo argumento del useEffect es un array vacío para indicar que solo se debe ejecutar una vez al montar el componente

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
        {/* Renderizar los pines */}
        {pines.map(pin => (
          <div key={pin.id} className="pin">
            <img src={`http://localhost:5001/${pin.img}`} alt={pin.titulo} />
            <h2>{pin.titulo}</h2>
            <p>{pin.descripcion}</p>
            {/* Botón Favorito */}
            <button onClick={() => agregarFavorito(pin.id)}>Favorito</button>
            {/* Input para Comentario */}
            <input type="text" placeholder="Agregar comentario" value={nuevoComentario} onChange={(e) => setNuevoComentario(e.target.value)} />
            {/* Botón Comentar */}
            <button onClick={guardarComentario}>Comentar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
