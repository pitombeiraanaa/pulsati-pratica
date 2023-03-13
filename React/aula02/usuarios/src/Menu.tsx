import { MenuItem } from "./MenuItem";

interface MenuProps {
  setOpcao: (opcao: number) => void;
}

export function Menu(props: MenuProps) {
  return (
    <div>
      <MenuItem titulo='Home' onClick={() => props.setOpcao(1)} />|
      <MenuItem titulo='Usuários' onClick={() => props.setOpcao(2)} />
    </div>
  )
}