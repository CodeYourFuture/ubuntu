exports.up = function(knex, Promise) {
  return knex.schema.createTable("addresses", function(table) {
    table.increments("address_id");
    table.string("House_number");
    table.string("Street_name");
    table.string("City");
    table.string("Postcode");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("addresses");
};
