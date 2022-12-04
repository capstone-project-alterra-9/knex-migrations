/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => knex.schema
 .table('points', (table) => {
     table.integer('cost_points').defaultTo(0).notNullable();
 });


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = (knex) => knex.schema
 .table('points', (table) => {
     table.dropColumn('cost_points');
 });
