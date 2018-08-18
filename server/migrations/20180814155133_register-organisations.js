exports.up = function(knex, Promise) {};

await knex.schema.createTable("register_organisations", table => {
  table.increments("organisation_id");
  table.string("organisation_name");
  table.string("contact_name");
  table.string("address");
  table.string("city");
  table.string("postcode");
  table.integer("phone");
  table.string("email");
});

exports.down = function(knex, Promise) {};
