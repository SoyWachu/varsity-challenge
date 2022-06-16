// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  //this data can't be hard coded, this is for dev purposes
  development: {
    client: "postgresql",
    connection: {
      database: "varsity_db",
      user: "postgres",
      password: "123456",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
