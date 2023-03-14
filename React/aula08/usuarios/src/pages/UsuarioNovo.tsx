import { useEffect, useState } from "react";
import { Cargo } from "../model/Cargo";
import { getCargos } from "../services/Cargos";
import { postUsuario } from "../services/Usuarios";

export function UsuarioNovo() {
  const [ cargos, setCargos ] = useState<Cargo[]>([]);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log(formData);
    
    const data = Object.fromEntries(formData);
    postUsuario({
      nome: data.nome.toString(),
      sobrenome: data.sobrenome.toString(),
      codigo_cargo: parseInt(data.codigo_cargo.toString(), 10)
    });
  }

  const loadCargos = async () => {
    const cargos = await getCargos();
    setCargos(cargos);
  }

  useEffect(() => {
    loadCargos();
  }, []);

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

      <div>
        <span>Cargo</span>
        <select name="codigo_cargo">
          {
            cargos.map(cargo => {
              return (
                <option value={cargo.codigo}>
                  {cargo.nome}
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