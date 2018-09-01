const express = require("express");
const router = express.Router();

const db = require("../helpers/db");

router.get("/shelters", (req, res) => {
  db.getShelters().then(data => {
    res.send(data);
  });
});

router.get("/referrals", (req, res) => {
  db.getReferrals().then(data => {
    res.send(data);
  });
});

// GET /users
router.get("/users", (req, res) => {
  db.getUsers().then(data => {
    res.send(data);
  });
});

router.post("/organisations", (req, res) => {
  const body = req.body;
  const organisation = {
    contact_name: body.contactName,
    organisation_name: body.organisationName,
    email: body.email,
    address: body.address
  };
  db.saveOrganisation(organisation).then(data => {
    res.send(data);
  });
});

module.exports = router;
