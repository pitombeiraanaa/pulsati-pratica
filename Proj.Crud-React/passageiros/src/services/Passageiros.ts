import axios from 'axios';
import {Passageiro} from "../model/Passageiro";

export async function getTodosPassageiros(): Promise<Passageiro[]> {

const {data} = await axios
.create({headers: {'Content-Type':'application/json'}})
.get('http://localhost:8080/passageiros');
return data; 
}

export async function getPassageiros(id: number){
    return axios.create({headers: {'Contente-Type': 'application/json'}})
.get(`http://localhost:8080/passageiros/${id}`);
}

export async function postPassageiro(dados: Passageiro){
    return axios.create({headers: {'Content-Type': 'application/json'}})
.post('http://localhost:8080/passageiros', dados);
}

export async function deletePassageiro(id: number){
    return axios.create({headers: {'Content-Type': 'application/json'}})
.delete(`http://localhost:8080/passageiros/${id}`);
}
