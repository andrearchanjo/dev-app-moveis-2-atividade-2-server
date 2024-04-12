import knex, { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table.integer('coach_id')
            .notNullable()
            .references('id')
            .inTable('coaches')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}