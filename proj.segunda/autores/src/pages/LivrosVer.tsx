import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLivros } from '../services/Livros';
import './LivrosVer.css'

export function LivrosVer() {
  const [ livros, setLivros ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!livros) {
    getLivros(parseInt(params.codigoLivro||'', 10))
      .then(res => setLivros(res.data));
  }

  return (
    <div className="lista">
      <span>Livros</span>
      <div>
        <span>Código Livro </span>  
        <input type="text" value={livros?.codigoLivro} />
      </div>
      <div>
        <span>Titulo  </span>
        <input type="text" value={livros?.titulo} />
      </div>
      <div>
        <span>Descrição </span>
        <input type="text" value={livros?.descricao} />
      </div>
     
    </div>
  )
}