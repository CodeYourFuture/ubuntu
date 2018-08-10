exports.up = function(knex, Promise) {

    return knex.schema.createTable("volunteers", function (table) {
        table.increments("volunteer_id");
        table.string("name");
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("volunteers");
}
