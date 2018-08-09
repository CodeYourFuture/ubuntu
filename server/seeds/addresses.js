exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("addresses").insert([
        { House_number: "44" },
        { Street_name: "Baronald Drive" },
        { City: "Glasgow" },
        { Postcode: "G12 OHW" }
      ]);
    });
};
