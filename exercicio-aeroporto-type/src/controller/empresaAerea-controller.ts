// const EmpresaAerea = require('../model/empresaAerea').EmpresaAerea;
import { Request, Response } from "express";
import AppDataSource from "../config/database";
import { EmpresaAerea } from "../model/empresaAerea";


export class EmpresaAereaController {
  async create(req: Request, res: Response) {
    const {nomeEmpresa}: { 
      nomeEmpresa: string
    } = req.body;
    const empresa = new EmpresaAerea();
    empresa.nomeEmpresa = nomeEmpresa;

    const repo = AppDataSource.getRepository(EmpresaAerea);
    await repo.save(empresa);

 
    res.json(empresa);
  }

  async get(req: Request, res: Response) {
    const codigo = req.params.codigo;

    const repo = AppDataSource.getRepository(EmpresaAerea);
    const empresa = await repo.findOneBy({codigo: parseInt(codigo, 10)});
    
    res.json(empresa);
  }


  async update(req: Request, res: Response) {
    const codigo = req.params.codigo;
    const {nommeEmpresa} = req.body;

    const repo = AppDataSource.getRepository(EmpresaAerea);
    const empresa = await repo.findOneBy({codigo: parseInt(codigo, 10)});
    empresa.nomeEmpresa = nommeEmpresa;

    await repo.save(empresa);
    res.json(empresa);
  }

  async delete(req: Request, res: Response) {
    const codigo = req.params.codigo;

    const repo = AppDataSource.getRepository(EmpresaAerea);
    await repo.delete(codigo);
    res.json({message: "Sucesso ao deletar usuario"});

  }

}
