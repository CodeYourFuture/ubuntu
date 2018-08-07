const express = require("express");
const router = express.Router();

router.get("/referrals", (req, res) => res.render("referrals"));
router.get("/shelters", (req, res) => res.render("shelters"));

module.exports = router;
