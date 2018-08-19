const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getShelters = () => {
  return knex.select().from("shelters");
};

const getReferrals = () => {
  return knex.select().from("referrals");
};

const getUsers = () => {
  return knex.select().from("users");
};

module.exports = {
  getShelters: getShelters,
  getReferrals: getReferrals,
  getUsers: getUsers
};
