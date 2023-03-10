import { useState } from 'react'
import { Menu } from './Menu';
import { MenuItem } from './MenuItem'
import { CriarUsuario } from './pages/CriarUsuario';
import { Home } from './pages/Home';
import { Usuarios } from './pages/Usuarios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/usuarios' element={<Usuarios />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
