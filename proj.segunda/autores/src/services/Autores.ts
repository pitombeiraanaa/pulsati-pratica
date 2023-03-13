import axios from "axios";
import { Autor } from "../model/Autor";

export async function getTodosAutores(): Promise<Autor[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/autores');
  return data;
}

export async function getAutor(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/autores/${id}`);
}

export async function postAutor(dados: Autor) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8000/autores', dados);
}

export function deleteAutor(id?: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8000/autores/${id}`);
}

export async function putAutor(dados: Autor) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8000/autores/${dados.idAutor}`, dados);
}
