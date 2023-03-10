import axios from "axios"
import { useState } from "react";
import { getTodosUsuarios } from "../services/Usuarios"

export function Usuarios() {
  const [ usuarios, setUsuarios ] = useState<any[]>();

  if (!usuarios || usuarios.length == 0) {
    const usuariosReq: any = getTodosUsuarios();
    usuariosReq.then((res: any) => {
      setUsuarios(res.data);
    });
  }

  return (
    <div>
      <span>Usuarios</span>
      <table>
        <thead>
          <td>Código</td>
          <td>Nome</td>
          <td>Sobrenome</td>
        </thead>
        <tbody>
          {
            usuarios?.map(usuario => {
              return (
                <tr>
                  <td>{usuario.codigo}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.sobrenome}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
