import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Autores } from './pages/Autores'
import { AutoresVer } from './pages/AutoresVer'
import { AutoresNovo } from './pages/AutoresNovo'
import { AutoresAtualizar } from './pages/AutoresAtualizar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div id='links'>
        <a href='/home'>Home</a>|
        <a href='/autores'>Lista de Autores</a>|
        <a href="/autores-criar">Criar Autor</a>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/autores' element={<Autores />} />
            <Route path='/autores/:id' element={<AutoresVer />} />
            <Route path='/autores-criar' element={<AutoresNovo />} />
            <Route
              path="/autores-atualizar/:id"
              element={<AutoresAtualizar />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
