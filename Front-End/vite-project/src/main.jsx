import React from 'react'
import ReactDOM from 'react-dom/client'
import {SessionProvider} from './context/sessionContext.jsx';
import App from './App.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <App />
  </SessionProvider>
)
