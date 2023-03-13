import axios from "axios";
import { Usuario } from "../model/Usuario";

export async function getTodosUsuarios(): Promise<Usuario[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8080/usuarios');
  return data;
}

export async function getUsuario(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8080/usuarios/${id}`);
}

export async function postUsuario(dados: Usuario) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8080/usuarios', dados);
}

export function deleteUsuario(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8080/usuarios/${id}`);
}
