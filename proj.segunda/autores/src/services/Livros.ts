import axios from "axios";
import { Livros } from "../model/Livros";

export async function getTodosLivros(): Promise<Livros[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/livros');
  return data;
}

export async function getLivros(codigoLivro: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/livro/${codigoLivro}`);
}

export async function postLivros(dados: Livros) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8000/autores', dados);
}

export function deleteLivros(codigoLivro: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8000/livro/${codigoLivro}`);
}

export async function putLivros(dados: Livros) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8000/Livros/${dados.codigoLivro}`, dados);
}
