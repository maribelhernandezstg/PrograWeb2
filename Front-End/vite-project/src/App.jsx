import { useState } from 'react'
import {Login} from './Login/Login'
import {Register} from './Login/Register'
import Profile from './components/profile'
import Pagina from './components/paginaPrincipal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <Router>
      <Routes> {/* Usar Routes en lugar de Route */}
        <Route path="/" element={<Login />} /> {/* Vista de inicio de sesión */}
        <Route path="/signup" element={<Register />} /> {/* Vista de registro */}
        <Route path="/profile" element={<Profile />} /> {/* Vista de perfil *+/}*/}
        <Route path="/pinterest" element={<Pagina />} /> {/* Vista de perfil *+/}*/}
        {/* Agrega más rutas según las necesidades de tu aplicación */}
      </Routes>
    </Router>
  )
}

export default App
