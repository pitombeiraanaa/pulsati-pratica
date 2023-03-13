import { useState } from 'react'
import { Menu } from './Menu';
import { MenuItem } from './MenuItem'
import { CriarUsuario } from './pages/CriarUsuario';
import { Home } from './pages/Home';
import { Usuarios } from './pages/Usuarios';

function App() {
  const [ opcao, setOpcao ] = useState(1);
  console.log('opcao', opcao);

  const renderPage = () => {
    if (opcao == 1) {
      return <Home />
    }
    if (opcao == 3) {
      return <CriarUsuario />
    }
    return <Usuarios onClick={() => setOpcao(3)} />
  }

  return (
    <div className="App">
      <Menu setOpcao={setOpcao} />
      <div>
        {renderPage()}
      </div>
    </div>
  )
}

export default App
