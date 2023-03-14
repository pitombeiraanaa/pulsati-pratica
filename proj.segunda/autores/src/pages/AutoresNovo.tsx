import { useEffect, useState } from "react";
import { postAutor } from "../services/Autores";
import { Livros } from "../model/Livros";
import { getLivros } from "../services/Livros";
import './AutoresNovo.css'

export function AutoresNovo() {
  const [livros, setLivros] = useState<Livros[]>([]);

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    console.log(formData);

    const data = Object.fromEntries(formData);
    postAutor({
      nomeAutor: data.nomeAutor.toString(),
      sobrenomeAutor: data.sobrenomeAutor.toString(),
      dataNascimento: data.dataNascimento.toString(),
      codigoLivro: parseInt(data.codigoLivro.toString()),
    });
    alert("Autor Salvo!")
  }

  const loadLivros = async () => {
    const livros = await getLivros();
    setLivros(livros);
  }

  useEffect(()=>{
  loadLivros();
  })

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome </span>
        <input type="text" name="nomeAutor" />
      </div>

      <div>
        <span>Sobrenome </span>
        <input type="text" name="sobrenomeAutor" />
      </div>

      <div>
        <span>Data de Nascimento </span>
        <input type="text" name="dataNascimento" />
      </div>

      <div>
        <span>Livro</span>
        <select name="codigoLivro">
          {
            livros.map(livro => {
              return (
                <option value={livro.codigoLivro}>
                  {livro.titulo}
                </option>
              )
            })
          }
        </select>
      </div>


      <input type="submit" value="Salvar" />
    </form>
  )
}