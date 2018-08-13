const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getStatus = () => {
  return knex.select().from("status");
};

const getShelters = () => {
  return knex.select().from("shelters");
};

const getAddresses = () => {
  return knex.select().from("addresses");
};
const getReferrals = () => {
  return knex.select().from("referrals");
};

const getUsers = () => {
  return knex.select().from("users");
};

module.exports = {
  getStatus: getStatus,
  getAddresses: getAddresses,
  getShelters: getShelters,
  getReferrals: getReferrals,
  getUsers: getUsers
};
