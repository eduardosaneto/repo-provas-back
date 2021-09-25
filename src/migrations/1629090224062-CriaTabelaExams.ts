/* eslint-disable no-mixed-spaces-and-tabs */
import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelaExams1629090224062 implements MigrationInterface {
    name = "CriaTabelaExams1629090224062"
	
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"exams\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"examLink\" character varying NOT NULL, \"disciplineId\" integer NOT NULL, \"professorId\" integer NOT NULL, \"categoryId\" integer NOT NULL, CONSTRAINT \"PK_b43159ee3efa440952794b4f53e\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("ALTER TABLE \"exams\" ADD CONSTRAINT \"FK_448fb069febfdb9e6a519121aab\" FOREIGN KEY (\"disciplineId\") REFERENCES \"disciplines\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"exams\" ADD CONSTRAINT \"FK_bcfdfcbfb5fe82b98eb79ac5818\" FOREIGN KEY (\"professorId\") REFERENCES \"professors\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"exams\" ADD CONSTRAINT \"FK_a4b572eed2e7293985b93a55eb3\" FOREIGN KEY (\"categoryId\") REFERENCES \"categories\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"exams\" DROP CONSTRAINT \"FK_a4b572eed2e7293985b93a55eb3\"");
      await queryRunner.query("ALTER TABLE \"exams\" DROP CONSTRAINT \"FK_bcfdfcbfb5fe82b98eb79ac5818\"");
      await queryRunner.query("ALTER TABLE \"exams\" DROP CONSTRAINT \"FK_448fb069febfdb9e6a519121aab\"");
      await queryRunner.query("DROP TABLE \"exams\"");
    }
}
