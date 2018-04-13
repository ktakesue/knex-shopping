const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router.get("/", (req, res) => {
  res.send("welcome to products");
});

module.exports = router;
