import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import miImagen from './../assets/img.png';
import './profile.css'
import Footer from './Footer/Footer';
import Header from './Hero/Header';


function Profile() {
  // Estado para almacenar la información del perfil
  const [profileInfo, setProfileInfo] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    fotoPerfil: '', // Aquí puedes guardar la URL de la foto de perfil
  });

  // Función para manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    });
  };

  // Función para manejar la carga de una nueva foto de perfil
  const handlePhotoChange = (e) => {
    // Aquí puedes implementar la lógica para cargar la nueva foto de perfil
  };
  



  return (
<>
  <Header/>
  <br />
  <br />
  <div className="card cardlogin" style={{backgroundColor: '#313131', color: '#c99da2'}}>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="row justify-content-center">
            
            <div className="profile-picture mt-5">
              <img src={miImagen} className="img-thumbnail" alt="Foto de perfil" />
            </div>
            
            <div className="col-md-9 mt-3 mb-3">
              <input className="file-input"
                type="file"
                name="imagen"
                onChange={handlePhotoChange} // Utiliza una función separada para manejar la carga de imágenes
              />
                
            </div>

          </div>
        </div>
        <div class="col mt-5">
          <div className="row justify-content-center">
            <div className="col-md-9 me-4 mb-2 ">
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
            <div className="col-md-9 me-4 mb-2 ">
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

      <button type="button" class="btn btn-outline-light button-profile mt-3 mb-3">Editar</button>
  </div>
  <br />
  <Footer />
</>
      
  );
  
}

export default Profile;