interface MenuItemProps {
  titulo: string;
  onClick?: () => void;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <span onClick={props.onClick}>{props.titulo}</span>
  )
}