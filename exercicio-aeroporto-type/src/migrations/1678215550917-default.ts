import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678215550917 implements MigrationInterface {
    name = 'default1678215550917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ana_aeroportos" ("codigo" number GENERATED BY DEFAULT AS IDENTITY, "nome" varchar2(255) NOT NULL, CONSTRAINT "PK_d2505781775e5623d3ccdb4628e" PRIMARY KEY ("codigo"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ana_aeroportos"`);
    }

}
