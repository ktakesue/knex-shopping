const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router.get("/", (req, res) => {
  //   res.send("here's the cart");
  return (
    knex
      .raw("SELECT * FROM cart")
      // .select()
      // .table("cart")
      .then(data => {
        console.log("data", data);
        return res.json(data);
      })
      .catch(err => {
        console.log("err", err);
        return res.status(400).json({
          message: "Cart items not found"
        });
      })
  );
});

module.exports = router;
