const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const api = require("./api");
const cors = require("cors");
const user = require("./routes/user");
const auth = require("./routes/auth");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser");
require("./passport");

app.use(cors());
app.use(bodyParser());

app.use("/api", api);
app.use("/auth", auth);
app.use("/user", passport.authenticate("jwt", { session: false }), user);

app.use("/static", express.static("public"));

// In development environemnt, we use the create-react-app dev server
// In production, the static build is served from here
if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  app.use("/", express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(SERVER_PORT, () =>
  console.log(`Ubuntu server running on http://localhost:${SERVER_PORT}`)
);
