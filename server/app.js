const SERVER_PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const api = require("./api");
const admin = require("./admin");
const cors = require("cors");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);

app.set("view engine", "hbs");

app.use(cors());

app.get("/", (req, res) => res.render("home"));

app.use("/admin", admin);
app.use("/api", api);

app.listen(SERVER_PORT, () =>
  console.log(`Ubuntu server running on http://localhost:${SERVER_PORT}`)
);
