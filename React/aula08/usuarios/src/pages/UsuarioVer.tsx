import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsuario } from '../services/Usuarios';

export function UsuarioVer() {
  const [ usuario, setUsuario ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!usuario) {
    getUsuario(parseInt(params.id||'', 10))
      .then(res => setUsuario(res.data));
  }

  return (
    <div>
      <span>Usuário</span>
      <div>
        <span>Código</span>
        <input type="text" value={usuario?.codigo} />
      </div>
      <div>
        <span>Nome</span>
        <input type="text" value={usuario?.nome} />
      </div>
      <div>
        <span>Sobrenome</span>
        <input type="text" value={usuario?.sobrenome} />
      </div>
    </div>
  )
}