import { postUsuario } from "../services/Usuarios";

export function UsuarioNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postUsuario({
      nome: data.nome.toString(),
      sobrenome: data.sobrenome.toString()
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>

      <div>
        <span>Sobrenome</span>
        <input type="text" name="sobrenome" />
      </div>

      <input type="submit" value="Salvar" />
    </form>
  )
}