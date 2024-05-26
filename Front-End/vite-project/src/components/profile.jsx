import React, { useState, useEffect } from 'react';
import miImagen from './../assets/img.png';
import './profile.css'
import Footer from './Footer/Footer';
import Header from './Hero/Header';

function Profile() {
  const [profileInfo, setProfileInfo] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    fotoPerfil: '',
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem('token'); // Suponiendo que el token se almacena en localStorage

      if (!token) {
        setError(true);
        return;
      }

      const config = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      try {
        const response = await fetch('http://localhost:5000/api/user/me', config);
        if (!response.ok) {
          setError(true);
          return;
        }
        const data = await response.json();
        setProfileInfo({
          nombre: data.nombre,
          apellido: data.apellido,
          usuario: data.usuario,
          fotoPerfil: data.fotoPerfil,
        });
      } catch (error) {
        console.error('Error al obtener la información del perfil:', error);
        setError(true);
      }
    }

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    // Aquí puedes implementar la lógica para cargar la nueva foto de perfil
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <div className="card cardlogin" style={{ backgroundColor: '#313131', color: '#c99da2' }}>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="row justify-content-center">
                <div className="profile-picture mt-5">
                  <img src={profileInfo.fotoPerfil || miImagen} className="img-thumbnail" alt="Foto de perfil" />
                </div>
                <div className="col-md-9 mt-3 mb-3">
                  <input
                    className="file-input"
                    type="file"
                    name="imagen"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>
            </div>
            <div className="col mt-5">
              <div className="row justify-content-center">
                <div className="col-md-9 me-4 mb-2">
                  <input
                    className="input-profile"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={profileInfo.nombre}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-9 me-4 mb-2">
                  <input
                    className="input-profile"
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={profileInfo.apellido}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-9 me-4 mb-2">
                  <input
                    className="input-profile"
                    type="text"
                    name="usuario"
                    placeholder="Usuario"
                    value={profileInfo.usuario}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-outline-light button-profile mt-3 mb-3">Editar</button>
      </div>
      <br />
      {error && <p className="msgError">No se pudo cargar la información del perfil. Por favor, intente nuevamente.</p>}
      <Footer />
    </>
  );
}

export default Profile;
