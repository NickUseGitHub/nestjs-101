import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitTicketEntity1623083399978 implements MigrationInterface {
  name = 'InitTicketEntity1623083399978';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ticket" ("id" SERIAL NOT NULL, "title" character varying, "description" character varying, "contact" character varying, "information" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ticket"`);
  }
}
