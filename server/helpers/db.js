const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getStatus = () => {
  return knex.select().from("status");
};

const getShelters = () => {
  return knex.select().from("shelters");
};

const getReferrals = () => {
  return knex.select().from("referrals");
};




module.exports = {
  getStatus: getStatus,
  getShelters: getShelters,
  getReferrals: getReferrals
};
