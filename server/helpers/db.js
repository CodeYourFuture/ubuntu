const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getStatus = () => {
  return knex.select().from("status");
};

const getShelters = () => {
  return knex.select().from("shelters");
};

const getOrganisations = () => {
  return knex.select().from("organisations");
};

module.exports = {
  getStatus: getStatus,
  getShelters: getShelters,
  getOrganisations: getOrganisations
};
