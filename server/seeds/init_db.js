exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries
  await knex("referrals").del();
  await knex("shelters").del();

  const shelters = await knex("shelters")
    .returning("shelter_id")
    .insert([
      {
        name: "Ubuntu Women Shelter",
        address: "G4",
        details: "very big shelter...."
      },
      {
        name: "Edinburgh Men Shelter",
        address: "E1",
        details: "men shelter...."
      }
    ]);

  const ubuntuShelterId = shelters[0];
  const edinburghShelterId = shelters[1];

  // Inserts seed entries
  await knex("referrals").insert([
    { name: "Mozafar", shelter_id: edinburghShelterId },
    { name: "Mimi", shelter_id: ubuntuShelterId },
    { name: "Etza", shelter_id: ubuntuShelterId }
  ]);

  await knex("users").insert([
    {
      name: "yohannes",
      email: "email@email.com",
      password: "password"
    }
  ]);
};
