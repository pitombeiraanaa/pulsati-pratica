import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cargo } from '../model/Cargo';
import { getCargos } from '../services/Cargos';
import { getUsuario } from '../services/Usuarios';

export function UsuarioEditar() {
  const [ usuario, setUsuario ] = useState<any>();
  const [ cargos, setCargos ] = useState<Cargo[]>();
  const params = useParams();

  const loadUserData = async () => {
    const usuario = await getUsuario(parseInt(params.id||'', 10));
    setUsuario(usuario);
  }

  const loadCargos = async () => {
    const cargos = await getCargos();
    console.log(cargos);
    setCargos(cargos);
  }

  useEffect(() => {
    loadUserData();
    loadCargos();
  }, []);

  const onSave = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log(Object.fromEntries(formData));
  }

  return (
    <form onSubmit={onSave}>
      <span>Usuário</span>
      <div>
        <span>Código</span>
        <input type="text" name='codigo' value={usuario?.codigo} />
      </div>
      <div>
        <span>Nome</span>
        <input type="text" name='nome' value={usuario?.nome} />
      </div>
      <div>
        <span>Sobrenome</span>
        <input type="text" name='sobrenome' value={usuario?.sobrenome} />
      </div>
      <div>
        <span>Cargo</span>
        <select name='codigo_cargo'>
          {cargos?.map(cargo => (
            <option key={cargo.codigo} value={cargo.codigo.toString()}>
              {cargo.descricao}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}