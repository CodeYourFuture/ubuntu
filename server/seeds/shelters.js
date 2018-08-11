exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shelters")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shelters").insert([
        {
          name: "Ubuntu shelter"
        },
        {
          name: "Edinburgh men shelter",
          address: "Edinburgh"
        }
      ]);
    });
};
