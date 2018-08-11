exports.up = function(knex, Promise) {
    return knex.schema.alterTable("referrals", function(table) {
      table.string("city").default("Glasgow");
    });
  };
  
  exports.down = function(knex, Promise) {};