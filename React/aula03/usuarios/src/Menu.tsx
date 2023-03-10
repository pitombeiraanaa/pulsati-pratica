import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <div>
      <MenuItem titulo='Home' path="/home" />|
      <MenuItem titulo='Usuários' path="/usuarios" />
    </div>
  )
}