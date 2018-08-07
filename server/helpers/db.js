const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getStatus = () => {
  return knex.select().from("status");
};

module.exports = {
  getStatus: getStatus
};
