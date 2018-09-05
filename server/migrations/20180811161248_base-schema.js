exports.up = async (knex, Promise) => {
  await knex.schema.createTable("shelters", table => {
    table.increments("shelter_id");
    table.string("name");
    table.string("address");
    table.string("who_we_are");
    table.string("what_we_do");
    table.string("who_do_we_support");
    table.string("contact");
    table.string("donations");
    table.string("image");
  });

  await knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("contact_name");
    table.string("organisation_name");
    table.string("address");
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("phone_number");
    table.enum("role", ["admin", "organisation", "shelter"]);
  });

  await knex.schema.createTable("referrals", table => {
    table.increments("referral_id");
    table.string("name");
    table.string("address");
    table.string("email");
    table.string("phone");
    table.integer("shelter_id");
    table.integer("user_id");

    table
      .foreign("shelter_id")
      .references("shelter_id")
      .inTable("shelters");
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("users");
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

    table.integer("shelter_id");
    table
      .foreign("shelter_id")
      .references("shelter_id")
      .inTable("shelters");
  });
  await knex.schema.createTable("volunteers", function(table) {
    table.increments("volunteer_id");
    table.string("name");
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists("volunteers");
  await knex.schema.dropTableIfExists("staff");
  await knex.schema.dropTableIfExists("referrals");
  await knex.schema.dropTableIfExists("shelters");
  await knex.schema.dropTableIfExists("users");
};
