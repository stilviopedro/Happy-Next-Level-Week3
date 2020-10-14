import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602663934201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Vai realizar as alterações no banco de dados
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_one_weekends',
                    type: 'boolean',
                    default: false,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Vai desfazer as alterações no banco de dados
        await queryRunner.dropTable('orphanages');
    }

}
