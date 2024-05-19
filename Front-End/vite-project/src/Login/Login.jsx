import { useState } from 'react';
import logo from '../assets/flicker.png';
import { Link as RouterLink } from 'react-router-dom';
import './Login.css';

export function Login({ setUser }) {
  const [nombre, setNombre] = useState('');
  const [contra, setContra] = useState('');
  const [error, setError] = useState(false);

  async function loginUser() {
    const payload = {
      user: nombre,
      pass: contra,
    };

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    setError(false);
    const response = await fetch('http://localhost:5000/login', config);
    if (response.status === 401) {
      setError(true);
    } else {
      alert('chi che pudo');
      setError(false);
      setUser([nombre]);
      return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cardlogin">
      <div className="loginImage ">
        <img className="image-align" src={logo} alt="" />
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
        <RouterLink to="/pinterest">
          <button onClick={loginUser}>Continuar</button>
        </RouterLink>
        <br />
        <RouterLink to="/signup">¿Aún no tienes una cuenta?</RouterLink>
      </form>
    </div>
  );
}

