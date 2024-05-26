import React, { useState } from 'react';
import './crearTablero.css';

function CrearPin() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null); // Para manejar la imagen

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    try {
      const response = await fetch('http://localhost:5001/api/pines', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Pin guardado exitosamente
        console.log('Pin guardado exitosamente');
      } else {
        // Error al guardar el pin
        console.error('Error al guardar el pin');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <div className="crear-tablero-container">
      <h1>Crear Pin</h1>
      <form className="contenido" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen:</label>
          
          <input type="file" id="imagen" name="imagen" accept="image/*" onChange={(e) => setImagen(e.target.files[0])} />

        </div>
        <div className="button-container">
          <button type="submit">Aceptar</button>
          <button type="button">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default CrearPin;
