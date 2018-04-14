const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router
  .get("/", (req, res) => {
    //   res.send("let's see those hoes");
    return knex
      .select()
      .table("users")
      .then(data => {
        console.log("data", data);
        return res.json(data);
      })
      .catch(err => {
        console.log("err", err);
        return res.json({
          message: "Users not found"
        });
      });
  })
  .get("/:user_id", (req, res) => {
    let userId = req.params.user_id;
    //   res.send(`hello, ${userId}`);
    return knex
      .select()
      .table("users")
      .where("id", userId)
      .then(data => {
        console.log("data", data);
        return res.json(data);
      })
      .catch(err => {
        console.log("err", err);
        return res.json({
          message: "User not found"
        });
      });
  })
  .post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    return knex
      .select()
      .table("users")
      .where("email", email)
      .andWhere("password", password)
      .then(data => {
        console.log("data", data);
        return res.json(data);
      })
      .catch(err => {
        console.log("err", err);
        res.json({
          message: "incorrect email & password"
        });
      });
    // .then(data => {
    //   if (!email) {
    //     return res.status(404).json({
    //       message: "Incorrect Email"
    //     });
    //   }
    //   console.log("data", data);
    //   return res.json(data);
    // })
    // .then(user => {
    //   if (email !== user.email && password !== user.password) {
    //     return res.status(400).json({
    //       message: "Incorrect Password"
    //     });
    //   }
    //   console.log("data", data);
    //   return res.json(data);
    // })
    // .catch(err => {
    //   console.log("err", err);
    //   return res.json({
    //     message: err.message
    //   });
    // })
  });

module.exports = router;
