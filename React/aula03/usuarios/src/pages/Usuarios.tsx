interface UsuariosProps {
  onClick?: () => void;
}

export function Usuarios(props: UsuariosProps) {
  return (
    <div>
      <span>Página Usuarios</span>
      <button onClick={props.onClick}>Ir para página Criar usuário</button>
    </div>
  )
}