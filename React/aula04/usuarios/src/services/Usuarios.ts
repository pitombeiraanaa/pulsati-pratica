import axios from "axios";

export async function getTodosUsuarios() {
  const usuarios = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/usuarios');
  return usuarios;
}
