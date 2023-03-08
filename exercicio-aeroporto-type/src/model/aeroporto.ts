import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ana_aeroportos2')
export class Aeroporto {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;
}
