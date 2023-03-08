// const Aeroporto = require('../model/aeroporto').Aeroporto;
import { Request, Response} from "express";
import AppDataSource from "../config/database";
import appDataSource from "../config/database";
import { Aeroporto} from "../model/aeroporto";

export class AeroportoController {
  async create(req:Request, res: Response) {
    const{nome} : {
      nome: string
    } = req.body;
    const aeroporto = new Aeroporto();
    aeroporto.nome = nome;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.save(aeroporto);

    res.json(aeroporto);
  }

  async get(req:Request, res: Response) {
  const codigo = req.params.codigo;
  const repo = AppDataSource.getRepository(Aeroporto);
  const aeroporto = await repo.findOneBy({codigo: parseInt(codigo, 10)});

  res.json(aeroporto);

  }

  async update(req: Request, res: Response) {
    const codigo = req.params.codigo;
    const { nome } = req.body;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ codigo: parseInt(codigo, 10) });
    aeroporto.nome = nome;

    await repo.save(aeroporto);
    res.json(aeroporto);
  }
   
  async delete(req: Request, res: Response) {
    const codigo = req.params.codigo;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.delete(codigo);
    res.json({ message: "Sucesso ao deletar usuario" });
  }
}