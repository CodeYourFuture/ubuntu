exports.up = function(knex, Promise) {
  return knex.schema.createTable("organisations", function(table) {
    table.increments("organisation_id");
    table.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("organisations");
};
