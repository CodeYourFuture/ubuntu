exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("addresses").insert([
        { id: 1, House_number: "44" },
        { id: 2, Street_name: "Baronald Drive" },
        { id: 3, City: "Glasgow" },
        { id: 4, Postcode: "G12 OHW" }
      ]);
    });
};
