exports.up = function(knex, Promise) {
  return knex.schema.createTable("addresses", function(table) {
    table.increments("address_id");
    table.string("name");
  });
};

exports.down = function(knex, Promise) {};
