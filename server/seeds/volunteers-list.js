exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("volunteers-list")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("volunteers-list").insert([
        {
          name: "Ubuntu volunteers"
        },
        {
          name: "soheila",
          role: "cashier"
        }
      ]);
    });
};
