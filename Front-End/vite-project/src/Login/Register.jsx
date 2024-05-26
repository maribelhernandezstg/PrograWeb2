import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { SessionContext } from '../context/sessionContext.jsx';
import logo from '../assets/log2.png';
import './Login.css';

export function Register() {
  const {saveSession} = useContext(SessionContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    try {
      const response = await fetch('http://localhost:5001/api/register', config);
      if (response.ok) {
        // Registro exitoso, redirigir o mostrar un mensaje
        console.log('Registro exitoso');
        saveSession(data);
        navigate('/inicio');
      } else {
        // Manejar error del servidor
        console.error('Error al registrar');
      }
    } catch (error) {
      // Manejar error de conexión
      console.error('Error de conexión', error);
    }
  };

  return (
    <div className="cardlogin">
      <div className="loginImage">
        <img className="logo image-align" src={logo} alt="" />
        <br />
        <div className="text-align">
          <h1 className="">Bienvenido</h1>
          <h3 className="">Registrar para continuar</h3>
        </div>
      </div>
      <form className='loginForm' onSubmit={handleSubmit}>
        <h2>Regístrate</h2>
        <div className='inputs'>
          <input type="text" className='' placeholder='Nombre' name="name" value={formData.name} onChange={handleChange} />
          <br />
          <input type="text" className='' placeholder='Apellido' name="lastName" value={formData.lastName} onChange={handleChange} />
          <br />
          <input type="text" className='' placeholder='Usuario' name="username" value={formData.username} onChange={handleChange} />
          <br />
          <input type="text" className='' placeholder='Correo electrónico' name="email" value={formData.email} onChange={handleChange} />
          <br />
          <input type="password" className='' placeholder='Contraseña' name="password" value={formData.password} onChange={handleChange} />
        </div>

        <button type="submit">Registrar</button>
        <br />
        <RouterLink to='/'>¿Ya tienes cuenta?</RouterLink>
      </form>
    </div>
  );
}
