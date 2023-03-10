import "./header.css";

export interface HeaderProps{
    setOpcao?: (opcao: number) => void;
}

export function Header(props: HeaderProps) {
    return(
        <div>
            <header>
                <a> Home</a>
                <a> Passageiros</a>
            </header>
        </div>
    )
}