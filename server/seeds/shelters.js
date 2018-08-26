exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shelters")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shelters").insert([
        {
          name: "Ubuntu shelter",
          email:"s.azadi@gmail.com",
          logo_url:"",
          phone_number:"1231456",
          office_address:"G1 0LP",
          who_we_are:"",
          what_we_do:"",
          supports:""
        },
        
      ]);
    });
};
