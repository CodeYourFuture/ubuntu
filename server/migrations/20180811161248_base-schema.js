exports.up = async (knex, Promise) => {
  await knex.schema.createTable("shelters", table => {
    table.increments("shelter_id");
    table.string("name");
    table.string("address");
    table.string("details");
  });
  await knex.schema.createTable("users", table => {
    table.increments("users_id");
  });
  await knex.schema.createTable("referrals", table => {
    table.increments("referral_id");
    table.string("name");
    table.string("address");
    table.string("email");
    table.string("phone");
    table.integer("shelter_id");
    table
      .foreign("shelter_id")
      .references("shelter_id")
      .inTable("shelters");
  });
  await knex.schema.createTable("staff", table => {
    table.increments("staff_id");
    table.string("name");
    table.string("address");
    table.string("email");
    table.string("phone");
    table.string("role");
    table.string("experience");
    table.boolean("paid");
  });
  await knex.schema.createTable("shelters_staff", table => {
    table.integer("shelter_id");
    table
      .foreign("shelter_id")
      .references("shelter_id")
      .inTable("shelters");
    table.integer("staff_id");
    table
      .foreign("staff_id")
      .references("staff_id")
      .inTable("staff");
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable("shelters_staff");
  await knex.schema.dropTable("staff");
  await knex.schema.dropTable("referrals");
  await knex.schema.dropTable("shelters");
};
