import { postLivros } from "../services/Livros";
import './LivrosNovo.css'

export function LivrosNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postLivros({
      codigoLivro: parseInt(data.codigoLivro.toString()),
      titulo: data.titulo.toString(),
      descricao: data.descricao.toString(),
    });
    alert("Livro Salvo!")
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Código Livro </span>
        <input type="text" name="codigoLivro" />
      </div>

      <div>
        <span>Título </span>
        <input type="text" name="titulo" />
      </div>

      <div>
        <span>Descrição </span>
        <input type="text" name="descricao" />
      </div>

      <input type="submit" value="Salvar" />
    </form>
  )
}