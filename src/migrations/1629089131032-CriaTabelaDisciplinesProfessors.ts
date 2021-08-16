import {MigrationInterface, QueryRunner} from "typeorm";

export class CriaTabelaDisciplinesProfessors1629089131032 implements MigrationInterface {
    name = 'CriaTabelaDisciplinesProfessors1629089131032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "disciplines_professors" ("id" SERIAL NOT NULL, "disciplineId" integer NOT NULL, "professorId" integer NOT NULL, CONSTRAINT "PK_20de3ee5dc7e37cfdeadb7ac665" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "disciplines_professors" ADD CONSTRAINT "FK_cc516e8d6fd4f51a5b8f5c982c2" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "disciplines_professors" ADD CONSTRAINT "FK_060cd22e3f81a814fda02c32ab1" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplines_professors" DROP CONSTRAINT "FK_060cd22e3f81a814fda02c32ab1"`);
        await queryRunner.query(`ALTER TABLE "disciplines_professors" DROP CONSTRAINT "FK_cc516e8d6fd4f51a5b8f5c982c2"`);
        await queryRunner.query(`DROP TABLE "disciplines_professors"`);
    }

}
