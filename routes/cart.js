const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router.get("/", (req, res) => {
  res.send("here's the cart");
});

module.exports = router;
