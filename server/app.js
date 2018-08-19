const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const api = require("./api");
const admin = require("./admin");
const cors = require("cors");
const user = require("./routes/user");
const auth = require("./routes/auth");
const passport = require("passport");
const bodyParser = require("body-parser");
require('./passport');

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);

app.set("view engine", "hbs");
app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => res.render("home"));

app.use("/admin", admin);
app.use("/api", api);
app.use('/auth', auth);
app.use("/user", passport.authenticate("jwt", { session: false }), user);

app.listen(SERVER_PORT, () =>
  console.log(`Ubuntu server running on http://localhost:${SERVER_PORT}`)
);
