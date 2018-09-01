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
        who_we_are: "very big shelter....",
        what_we_do: "we do stuff....",
        who_do_we_support: "women asylum seekers",
        contact: "contact ubuntu",
        donations: "donate to ubuntu"
      },
      {
        name: "Edinburgh Men Shelter",
        address: "E2",
        contact: "contact Edinburgh",
        donations: "donate to Edinburgh"
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
      contact_name: "hiwot",
      email: "hiwot@hiwot.com",
      password: "password",
      role: "admin"
    },
    {
      contact_name: "yohannes",
      email: "yohannes@yohannes.com",
      password: "password",
      role: "shelter"
    },
    {
      contact_name: "etza",
      email: "etza@etza.com",
      password: "password",
      role: "organisation"
    }
  ]);

  await knex("volunteers").del();

  // Inserts seed entries
  return knex("volunteers").insert([
    {
      name: "Ubuntu volunteers"
    },
    {
      name: "soheila"
    }
  ]);
};
