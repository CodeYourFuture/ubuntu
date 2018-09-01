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

// GET /status
router.get("/status", (req, res) => {
  db.getStatus().then(data => {
    res.send(data);
  });
});

// GET /organisations
router.get("/organisations", (req, res) => {
  db.getOrganisations().then(data => {
    res.send(data);
  });
});
//GET /addresses
router.get("/addresses", (req, res) => {
  db.getAddresses().then(data => {
    res.send(data);
  });
});

// GET /users
router.get("/users", (req, res) => {
  db.getUsers().then(data => {
    res.send(data);
  });
});

router.post("/users", (req, res) => {
  const body = req.body;
  const user = {
    contact_name: body.contactName,
    organisation_name: body.organisationName,
    email: body.email,
    address: body.address,
    password: body.password
  };
  console.log(".>>>>", user);
  db.saveUser(user).then(data => {
    res.send(data);
  });
});

module.exports = router;
