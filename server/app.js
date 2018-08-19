const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const api = require("./api");
const cors = require("cors");

app.use(cors());
app.use("/api", api);

app.listen(SERVER_PORT, () =>
  console.log(`Ubuntu server running on http://localhost:${SERVER_PORT}`)
);
