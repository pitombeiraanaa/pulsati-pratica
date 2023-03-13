import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Usuarios } from './pages/Usuarios'
import { UsuarioVer } from './pages/UsuarioVer'

function App() {
  return (
    <div className="App">
      <div>
        <a href='/home'>Home</a>|
        <a href='/usuarios'>Usuarios</a>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/usuarios/:id' element={<UsuarioVer />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
