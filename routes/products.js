const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router
  .get("/", (req, res) => {
    // res.send("welcome to products");
    return (
      knex
        .raw("SELECT * FROM products")
        // .select()
        // .table("products")
        .then(data => {
          console.log("data", data.rows);
          return res.json(data.rows);
        })
        .catch(err => {
          console.log("err", err);
          return res.status(400).json({
            message: "Products not found"
          });
        })
    );
  })
  .get("/:product_id", (req, res) => {
    let productId = req.params.product_id;

    return knex
      .raw(`SELECT * FROM products WHERE id = ${productId}`)
      .then(data => {
        if (data.rows.length) {
          console.log("data", data.rows);
          return res.json(data.rows);
        }
        return res.status(400).json({ message: "Not a Product" });
      })
      .catch(err => {
        console.log("err", err);
        return res.status(404).json({
          message: "Product not found"
        });
      });
  });

module.exports = router;
