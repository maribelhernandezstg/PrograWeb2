import React, { useState, useEffect } from 'react';
import './favoritos.css'; // Importa el archivo CSS para los estilos

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  // Función para obtener los pines favoritos desde el servidor
  const obtenerFavoritos = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/favoritos');
      if (response.ok) {
        const data = await response.json();
        setFavoritos(data);
      } else {
        console.error('Error al obtener los pines favoritos');
      }
    } catch (error) {
      console.error('Error al obtener los pines favoritos:', error);
    }
  };

  useEffect(() => {
    // Llama a la función para obtener los pines favoritos cuando el componente se monta
    obtenerFavoritos();
  }, []); // El segundo argumento del useEffect es un array vacío para indicar que solo se debe ejecutar una vez al montar el componente

  return (
    <div className="favoritos">
      <h1>Mis Pines Favoritos</h1>
      <div className="favoritos-list">
        {/* Renderizar los pines favoritos */}
        {favoritos.map(pin => (
          <div key={pin.id} className="pin">
            <img src={pin.img} alt={pin.titulo} />
            <h2>{pin.titulo}</h2>
            <p>{pin.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
