// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "ubuntu",
      user: "cyf",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
