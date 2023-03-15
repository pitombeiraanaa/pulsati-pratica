import axios from "axios"
import { useEffect, useState } from "react";
import { deleteLivros, getTodosLivros } from "../services/Livros"
import { Livros } from "../model/Livros";
import './Livros.css'

export function Livros() {
  const [ Livros, setLivros ] = useState<Livros[]>();

  const loadData = async () => {
    const livros : Livros[] = await getTodosLivros();
    setLivros(livros);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteLivros = (codigoLivro: number) => {
    deleteLivros(codigoLivro).then(() => loadData());
  }

  return (
    <div id="table">
      <span>Livros</span>
      <table>
        <thead>
          <td>Código Livro</td>
          <td>Título</td>
          <td>Descrição</td>
        </thead>
        <tbody>
          {
            Livros?.map(Livros => {
              return (
                <tr>
                  <td>{Livros.codigoLivro}</td>
                  <td>{Livros.titulo}</td>
                  <td>{Livros.descricao}</td>
                  <td><a href={`/livros/${Livros.codigoLivro}`}>Ver</a></td>
                  <td>
                  <a href={`/livros-atualizar/${Livros.codigoLivro}`}>
                    Atualizar
                  </a>
                </td>
                  <button onClick={() => onClickDeleteLivros(Livros?.codigoLivro)}>Excluir</button>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}