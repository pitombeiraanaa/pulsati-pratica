import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { UsuarioNovo } from './pages/UsuarioNovo'
import { Usuarios } from './pages/Usuarios'
import { UsuarioVer } from './pages/UsuarioVer'

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link href='/home' color="inherit">Home</Link> |
            <Link href='/usuarios' color="inherit">Usuários</Link>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/usuarios/:id' element={<UsuarioVer />} />
            <Route path='/usuarios-criar' element={<UsuarioNovo />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
