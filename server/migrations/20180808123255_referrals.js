exports.up = function(knex, Promise) {
    return knex.schema.createTable("referrals", function(table) {
      table.increments("referral_id");
      table.string("name");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("referrals");
  };