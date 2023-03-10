import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Pages/Header/header.css'
import './Pages/Home/home.css'
import './Pages/Login/login.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)