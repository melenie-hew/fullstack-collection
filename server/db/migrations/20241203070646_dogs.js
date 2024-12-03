/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('dogs', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('breed')
    table.string('gender')
   
  })
}


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('dogs')
}
