import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('usersAccount', table => {
    table.string('id').unique().notNullable();
    table.string('name').notNullable();
    table.string('lastname').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('photo').notNullable();
  });
} 

export async function down(knex: Knex) {
  return knex.schema.dropTable('usersAccount');
}