/*Atividade 5:
- Utilizando o mesmo servidor criado na atividade 1
- De acordo com as atividades anteriores, adicione
tratamento para atender as requisições
POST/GET/PUT/DELETE para a rota /empresas-aereas
*/

class empresasAereas{
    codigoEmpresa;
    nome;

 constructor(codigoEmpresa, nome){
 this.nome = nome;
 this.codigoEmpresa = codigoEmpresa
 }
}

exports.empresasAereas = empresasAereas;