exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("referrals")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("referrals").insert([
        {
          name: "soheila",
          address: "anniesland",
          email: "soheila@gmail.com",
          phone: "112233"
        },
        {
          name: "ava",
          address: "Edinburgh",
          email: "ava@gmail.com",
          phone: "223344"
        },
        {
          name: "mehrdad",
          address: "nice wood",
          email: "mehrdad@gmail.com",
          phone: "334455"
        }
      ]);
    });
};
