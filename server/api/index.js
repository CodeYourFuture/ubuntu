const express = require("express");
const router = express.Router();

const db = require("../helpers/db");

router.get("/status", (req, res) => {
  db.getStatus().then(data => {
    res.send(data);
  });
});

module.exports = router;
