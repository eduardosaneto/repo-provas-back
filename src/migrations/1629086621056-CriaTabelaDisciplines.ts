import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelaDisciplines1629086621056 implements MigrationInterface {
    name = "CriaTabelaDisciplines1629086621056"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"disciplines\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"semesterId\" integer NOT NULL, CONSTRAINT \"PK_9b25ea6da0741577a73c9e90aad\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("ALTER TABLE \"disciplines\" ADD CONSTRAINT \"FK_bfb0beefc540ccb9924db227208\" FOREIGN KEY (\"semesterId\") REFERENCES \"semesters\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"disciplines\" DROP CONSTRAINT \"FK_bfb0beefc540ccb9924db227208\"");
      await queryRunner.query("DROP TABLE \"disciplines\"");
    }
}
