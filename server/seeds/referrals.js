exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("referrals")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("referrals").insert([
        {
          name: "Ubuntu referral"
        },
        {
          name: "Edinburgh men referral"
        }
      ]);
    });
};