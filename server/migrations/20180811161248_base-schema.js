exports.up = async (knex, Promise) => {
  await knex.schema.createTable("shelters", table => {
    table.increments("shelter_id");
    table.string("name");
    table.string("address");
    table.string("details");
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
  await knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("name");
    table.string("email");
    table.string("password");
  });
};

await knex.schema.createTable("register_organisations", tabe => {
  table.increments("organisation_id");
  table.string("organisation_name");
  table.string("contact_name");
  table.string("address");
  table.string("email");
  table.string("phone_number");
});

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists("shelters_staff");
  await knex.schema.dropTableIfExists("staff");
  await knex.schema.dropTableIfExists("referrals");
  await knex.schema.dropTableIfExists("shelters");
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("register_organisations");
};
