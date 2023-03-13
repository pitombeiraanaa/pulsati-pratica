import axios from "axios"
import { useEffect, useState } from "react";
import { Usuario } from "../model/Usuario";
import { deleteUsuario, getTodosUsuarios } from "../services/Usuarios"

export function Usuarios() {
  const [ usuarios, setUsuarios ] = useState<Usuario[]>();

  const loadData = async () => {
    const usuarios: Usuario[] = await getTodosUsuarios();
    setUsuarios(usuarios);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteUsuario = (id: number) => {
    deleteUsuario(id).then(() => loadData());
  }

  return (
    <div>
      <span>Usuarios</span>
      <a href="/usuarios-criar">Criar usuário</a>
      <table>
        <thead>
          <td>Código</td>
          <td>Nome</td>
          <td>Sobrenome</td>
          <td>Ações</td>
        </thead>
        <tbody>
          {
            usuarios?.map(usuario => {
              return (
                <tr>
                  <td>{usuario.codigo}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.sobrenome}</td>
                  <td>
                    <a href={`/usuarios/${usuario.codigo}`}>Ver</a>
                    <button onClick={() => onClickDeleteUsuario(usuario.codigo)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
