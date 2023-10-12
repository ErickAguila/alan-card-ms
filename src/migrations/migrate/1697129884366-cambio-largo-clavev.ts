import { MigrationInterface, QueryRunner } from "typeorm";

export class CambioLargoClavev1697129884366 implements MigrationInterface {
    name = 'CambioLargoClavev1697129884366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "clave"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "clave" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orden" DROP CONSTRAINT "FK_7d22952b51137bd0398705c87c5"`);
        await queryRunner.query(`ALTER TABLE "orden" DROP CONSTRAINT "FK_fa2e5f9aa82519c88adf15b616e"`);
        await queryRunner.query(`ALTER TABLE "orden" ALTER COLUMN "idCarta" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orden" ALTER COLUMN "idUsuario" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "carta" DROP CONSTRAINT "FK_419fa651a0730e824b0676cdfca"`);
        await queryRunner.query(`ALTER TABLE "carta" DROP CONSTRAINT "FK_3f7e33e10de7c9d53cee8854ef9"`);
        await queryRunner.query(`ALTER TABLE "carta" ALTER COLUMN "idTipoCarta" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "carta" ALTER COLUMN "idHabilidad" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orden" ADD CONSTRAINT "FK_7d22952b51137bd0398705c87c5" FOREIGN KEY ("idCarta") REFERENCES "carta"("idCarta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orden" ADD CONSTRAINT "FK_fa2e5f9aa82519c88adf15b616e" FOREIGN KEY ("idUsuario") REFERENCES "usuario"("idUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carta" ADD CONSTRAINT "FK_419fa651a0730e824b0676cdfca" FOREIGN KEY ("idTipoCarta") REFERENCES "tipo_carta"("idTipoCarta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carta" ADD CONSTRAINT "FK_3f7e33e10de7c9d53cee8854ef9" FOREIGN KEY ("idHabilidad") REFERENCES "habilidad"("idHabilidad") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carta" DROP CONSTRAINT "FK_3f7e33e10de7c9d53cee8854ef9"`);
        await queryRunner.query(`ALTER TABLE "carta" DROP CONSTRAINT "FK_419fa651a0730e824b0676cdfca"`);
        await queryRunner.query(`ALTER TABLE "orden" DROP CONSTRAINT "FK_fa2e5f9aa82519c88adf15b616e"`);
        await queryRunner.query(`ALTER TABLE "orden" DROP CONSTRAINT "FK_7d22952b51137bd0398705c87c5"`);
        await queryRunner.query(`ALTER TABLE "carta" ALTER COLUMN "idHabilidad" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "carta" ALTER COLUMN "idTipoCarta" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "carta" ADD CONSTRAINT "FK_3f7e33e10de7c9d53cee8854ef9" FOREIGN KEY ("idHabilidad") REFERENCES "habilidad"("idHabilidad") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carta" ADD CONSTRAINT "FK_419fa651a0730e824b0676cdfca" FOREIGN KEY ("idTipoCarta") REFERENCES "tipo_carta"("idTipoCarta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orden" ALTER COLUMN "idUsuario" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orden" ALTER COLUMN "idCarta" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orden" ADD CONSTRAINT "FK_fa2e5f9aa82519c88adf15b616e" FOREIGN KEY ("idUsuario") REFERENCES "usuario"("idUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orden" ADD CONSTRAINT "FK_7d22952b51137bd0398705c87c5" FOREIGN KEY ("idCarta") REFERENCES "carta"("idCarta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "clave"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "clave" character varying(50) NOT NULL`);
    }

}
