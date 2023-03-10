import "./header.css";
import { useState } from "react";
import { Login } from "../Login/login";
import { Home } from "../Home/home";

export function Header() {
  const [opcao, setOpcao] = useState(1);
  const chamarLogin = () => {
    setOpcao(2);
  };
  const chamarHome = () => {
    setOpcao(1);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <a onClick={chamarHome}>
            <img src="../src/Images/logo.png" />
          </a>
        </div>

        <div className="nav">
          <a href="#">Sobre</a>
          <a href="#">Programas</a>
          <a href="#">Recursos</a>
        </div>

        <div className="btn-header">
          <div className="acessar">
            <a onClick={chamarLogin}>
              <button>Acessar</button>
            </a>
          </div>

          <div className="cadastro">
            <a href="">
              <button>Cadastre-se</button>
            </a>
          </div>
        </div>
      </header>
      <div>{opcao == 1 ? <Home /> : <Login />}</div>
    </div>
  );
}
