exports.up = function(knex, Promise) {
  return knex.raw(
    await knex.schema.createTable("shelters", table => {
      table.increments("shelter_id");
      table.string("name");
      table.string("email");
      table.string("logo_url");
      table.increments("phone_number");
      table.string("office_address");
      table.string("who_we_are");
      table.string("what_we_do");
      table.string("supports");
    })
    
  );
};

exports.down = function(knex, Promise) {};
