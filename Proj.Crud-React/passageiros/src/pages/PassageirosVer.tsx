import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPassageiros} from "../services/Passageiros";

export function PassageirosVer() {
  const [passageiro, setPassageiro] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!passageiro) {
    getPassageiros(parseInt(params.id || "", 10)).then((res) =>
      setPassageiro(res.data)
    );
  }

  return (
    <div>
      <span>Usuário</span>
      <div>
        <span>Código ID</span>
        <input type="text" value={passageiro?.codigo} />
      </div>
      <div>
        <span>Nome</span>
        <input type="text" value={passageiro?.nome} />
      </div>
      <div>
        <span>Codigo Voo</span>
        <input type="text" value={passageiro?.codigoVoo} />
      </div>
    </div>
  )
}
