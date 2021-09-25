import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelaCategories1629085520906 implements MigrationInterface {
  name = "CriaTabelaCategories1629085520906";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE \"categories\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, CONSTRAINT \"PK_24dbc6126a28ff948da33e97d3b\" PRIMARY KEY (\"id\"))"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE \"categories\"");
  }
}
