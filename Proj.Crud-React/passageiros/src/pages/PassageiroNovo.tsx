import { postPassageiro } from "../services/Passageiros";

export function PassageiroNovo() {
  const onSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    postPassageiro({
      nome: data.nome.toString(),
      codigoVoo: data.codigoVoo.toString(),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Código ID</span>
        <input type="number" name="codigo" />
        </div>

     <div>
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>

      <div>
        <span>Código do Voo</span>
        <input type="text" name="codigoVoo" />
      </div>

      <input type="submit" value="Salvar" />
    </form>
  );
}
