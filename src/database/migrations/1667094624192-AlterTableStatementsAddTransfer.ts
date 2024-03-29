import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AlterTableStatementsAddTransfer1618159542325 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'statements',
      new TableColumn({
        name: 'transfer_id',
        type: 'uuid',
        isNullable: true
      }))

    await queryRunner.createForeignKey(
      'statements',
      new TableForeignKey({
        name: 'FK_transfer_id_statements',
        referencedTableName: 'transfers',
        referencedColumnNames: ['id'],
        columnNames: ['transfer_id']
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('statements', 'FK_transfer_id_statements')
    await queryRunner.dropColumn('statements', 'transfer_id')
  }

}
