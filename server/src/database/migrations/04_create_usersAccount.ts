import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('usersAccount', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('lastname').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  });
} 

export async function down(knex: Knex) {
  return knex.schema.dropTable('usersAccount');
}