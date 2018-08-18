exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("register organisations").insert([
        {
          organisation_name: `Lesley's organistion`,
          contact_name: `Lesley`,
          address: `Lesley's house`,
          city: `Lesley's city`,
          postcode: `Lesley`
        },
        {
          organisation_name: `Etza's organistion`,
          contact_name: `Etza`,
          address: `Etza's house`,
          city: `Etza's city`,
          postcode: `Etza`
        }
      ]);
    });
};
