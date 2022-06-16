/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("city", (table) => {
    table.increments("id");
    table.string("city_name", 255).notNullable();
    table.decimal("temp").notNullable();
    table.decimal("humidity").notNullable();
    table.integer("city_id").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("city");
};
