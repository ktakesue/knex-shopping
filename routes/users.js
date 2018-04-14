const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router
  .get("/", (req, res) => {
    return knex
      .raw("SELECT * FROM users")
      .then(data => {
        console.log("data", data.rows);
        return res.json(data.rows);
      })
      .catch(err => {
        console.log("err", err);
        return res.status(400).json({
          message: "Users not found"
        });
      });
  })
  .get("/:user_id", (req, res) => {
    let userId = req.params.user_id;

    return knex
      .raw(`SELECT * FROM users WHERE id = ${userId}`)
      .then(data => {
        if (data.rows.length) {
          console.log("data", data.rows);
          return res.json(data.rows);
        }
        return res.status(400).json({ message: "Not a User" });
      })
      .catch(err => {
        console.log("err", err);
        return res.status(404).json({
          message: "User not found"
        });
      });
  })
  .post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    return (
      knex
        //raw queries are easier to use when integreating functions//
        .raw(
          "SELECT users.email, users.password FROM users WHERE users.email = ?",
          [email]
        )
        .then(data => {
          //check if email is valid//
          if (data.rows.length) {
            //check if password of email is valid//
            if (data.rows[0].password === password) {
              console.log("data", data.rows);
              //return data if both are valid//
              return res.json(data.rows[0]);
            } else {
              return res.status(400).json({ message: "INCORRECT PASSWORD" });
            }
          }
          return res.status(404).json({ message: "INCORRECT EMAIL" });
        })
        .catch(err => {
          console.log("err", err);
          return res.status(404).json({
            message: "EERRRROR"
          });
        })
    );
  })
  .post("/register", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
  })
  .put("/:user_id/forgot-password", (req, res) => {})
  .delete("/:user_id", (req, res) => {});
module.exports = router;
