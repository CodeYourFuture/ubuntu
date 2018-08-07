exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("organisations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("organisations").insert([
        { name: "Ubuntu" },
        { name: "Refuweegee" },
        { name: "SRC" }
      ]);
    });
};
