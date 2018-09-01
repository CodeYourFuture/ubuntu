const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getShelters = () => {
  return knex.select().from("shelters");
};

const getOrganisations = () => {
  return knex.select().from("organisations");
};

const getAddresses = () => {
  return knex.select().from("addresses");
};

const getReferrals = () => {
  return knex.select().from("referrals");
};

const saveUser = user => {
  return knex("users").insert(user);
};

const getShelterAbout = () => {
  return knex.select().from("about");
};

const getUsers = () => {
  return knex.select().from("users");
};

const getSingleUser = (email, password) => {
  return knex("users")
    .where({ email, password })
    .first();
};
const getUserProfile = userId => {
  return knex("users")
    .select("user_id", "email", "name")
    .where({ user_id: userId })
    .first();
};

module.exports = {
  getShelters: getShelters,
  getOrganisations: getOrganisations,
  getAddresses: getAddresses,

  getShelters: getShelters,
  getReferrals: getReferrals,
  getUsers: getUsers,
  getSingleUser,
  getUserProfile,
  saveUser,
  getShelterAbout
};
