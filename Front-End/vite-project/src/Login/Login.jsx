import { useState } from 'react';
import logo from '../assets/log2.png';
import { Link as RouterLink } from 'react-router-dom';
import './Login.css';

export function Login({ setUser }) {
  const [nombre, setNombre] = useState('');
  const [contra, setContra] = useState('');
  const [error, setError] = useState(false);

  async function loginUser() {
    const payload = {
      username: nombre, // Cambia 'user' a 'username' para que coincida con el backend
      password: contra,
    };

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    setError(false);
    try {
      const response = await fetch('http://localhost:5001/api/login', config); // Ajusta la URL del endpoint
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();
      setUser(data.username);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="cardlogin">
      <div className="loginImage ">
        <img className="logo image-align" src={logo} alt="" />
        <br />
        <div className="text-align">
          <h1 className="">Bienvenido</h1>
          <h3 className="">Ingresa para continuar</h3>
        </div>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Inicio de sesión</h2>
        <div className="inputs">
          <input
            type="text"
            className=""
            placeholder="Correo electrónico"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br />
          <input
            type="password"
            className=""
            placeholder="Contraseña"
            value={contra}
            onChange={(e) => setContra(e.target.value)}
          />
          {error && <p className="msgError">Verifique usuario y/o contraseña</p>}
        </div>
        <br />
        <button type="submit">Continuar</button> {/* Cambia el botón a type="submit" */}
        <br />
        <RouterLink to="/signup">¿Aún no tienes una cuenta?</RouterLink>
      </form>
    </div>
  );
}
