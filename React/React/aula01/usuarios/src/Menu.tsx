import { Criar } from "./menu/Criar"
import { Alterar } from "./menu/alterar"
import { useState } from "react"
import { PaginaHome } from "./pages/PaginaHome";
import { PaginaMenu } from "./pages/PaginaMenu";

export function Menu() {
  const [ opcao, setOpcao ] = useState<number>(1);
  console.log('opcao', opcao);

  const opcao3clicada = () => {
    setOpcao(3);
  }

  const renderAlterarUsuario = () => {
    return opcao == 3 ?
      <button style={{ backgroundColor: "#000" }}>
        Home
      </button> :
      <button onClick={opcao3clicada}>Home</button>
  }

  return (
    <div>
      <ul className="menu">
        <Criar />
        <Alterar />
        {renderAlterarUsuario()}
        <li onClick={() => setOpcao(4)}>Menu</li>
      </ul>
      {
        opcao == 3 ?
          <PaginaMenu /> :
          <PaginaHome />
      }
    </div>
  )
}
