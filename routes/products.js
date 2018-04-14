const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router.get("/", (req, res) => {
  // res.send("welcome to products");
  return knex
    .select()
    .table("products")
    .then(data => {
      console.log("data", data);
      return res.json(data);
    })
    .catch(err => {
      console.log("err", err);
      return res.json({
        message: "Products not found"
      });
    });
});

module.exports = router;
