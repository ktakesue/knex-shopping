const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router.get("/", (req, res) => {
  //   res.send("here's the cart");
  return knex
    .select()
    .table("cart")
    .then(data => {
      console.log("data", data);
      return res.json(data);
    })
    .catch(err => {
      console.log("err", err);
      return res.json({
        message: "Cart items not found"
      });
    });
});

module.exports = router;
