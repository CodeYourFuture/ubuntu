const SERVER_PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world"));
app.get("/api/status", (req, res) => {
  res.send({
    status: OK
  });
});

app.listen(SERVER_PORT, () =>
  console.log(`Ubuntu server running on ${SERVER_PORT}`)
);
