const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const knex = require("./knex/knex.js");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/users", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
