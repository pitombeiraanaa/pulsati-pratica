import axios from "axios";

export async function getTodosUsuarios() {
  const usuarios = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/usuarios');
  return usuarios;
}

export async function getUsuario(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8007/usuarios/${id}`);
}