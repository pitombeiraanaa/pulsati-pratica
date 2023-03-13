import axios from "axios"
import {useEffect, useState} from "react";
import {Passageiro} from "../model/Passageiro";
import { deletePassageiro, getTodosPassageiros} from "../services/Passageiros"

export function Passageiros() {
    const [passageiros, setPassageiros] = useState<Passageiro[]>();

    const loadData = async () => {
        const passageiros : Passageiro[] = await getTodosPassageiros();
        setPassageiros(passageiros);
    }

    useEffect (()=>{
        loadData();
    }, []);

    const onClickDeletePassageiro = (id: number) => {
        deletePassageiro(id).then(() => loadData());
    };

    return (
        <div>
            <span>Passageiros</span>
            <a href="/passageiros-criar">Criar Passageiro</a>
            <table>
                <thead>
                    <td>Codigo</td>
                    <td>Nome Completo</td>
                    <td>Codigo Voo</td>
                </thead>
                <tbody>
                    {
                        passageiros?.map(passageiro =>{
                            return (
                                <tr>
                                  <td>{passageiro.codigo}</td>
                                  <td>{passageiro.nome}</td>
                                  <td>{passageiro.codigoVoo}</td>
                                  <td>
                                    <a href={`/passageiros/${passageiro.codigo}`}>Ver</a>
                                    <button onClick={() => onClickDeletePassageiro(passageiro.codigo)}>Delete</button>
                                  </td>
                                </tr>
                              )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}