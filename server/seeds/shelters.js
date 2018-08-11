exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shelters")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shelters").insert([
        {
          name: "anniesland shelter",
          address: "anniesland",
          detail: "2 bedrooms"
        },
        {
          name: "Edinburgh men shelter",
          address: "Edinburgh",
          detail: "3 bedrooms"
        },
        {
          name: "nice wood shelter",
          address: "nice wood",
          detail: "1 bedroom"
        }
      ]);
    });
};
