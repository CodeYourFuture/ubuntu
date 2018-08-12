exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("staff")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("staff").insert([
        {
          name: "soheila",
          address: "anniesland",
          email: "soheila@gmail.com",
          phone: "112233",
          role: "driver",
          experience: "true",
          paid: "true"
        },
        {
          name: "ava",
          address: "Edinburgh",
          email: "ava@gmail.com",
          phone: "223344",
          role: "driver",
          experience: "false",
          paid: "true"
        },
        {
          name: "mehrdad",
          address: "nice wood",
          email: "mehrdad@gmail.com",
          phone: "334455",
          role: "driver",
          experience: "true",
          paid: "false"
        }
      ]);
    });
};
