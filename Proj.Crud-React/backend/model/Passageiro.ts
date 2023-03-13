import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('passageiros')
export class Passageiro  {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "text" })
  nome: string;
  
  @Column({ type: "text", nullable: true })
  codigoVoo: string;
}