const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router.get("/:user_id", (req, res) => {
  let userId = req.params.user_id;
  res.send("hello, users");
  knex.select();
});

module.exports = router;
