const SERVER_PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => res.render("home"));

app.get("/admin/referrals", (req, res) => res.render("referrals"));
app.get("/admin/shelters", (req, res) => res.render("shelters"));

app;

app.get("/api/status", (req, res) => {
  res.send({
    status: OK
  });
});

app.listen(SERVER_PORT, () =>
  console.log(`Ubuntu server running on ${SERVER_PORT}`)
);
