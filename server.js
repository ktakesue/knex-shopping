const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const knex = require("./knex/knex.js");

const PORT = process.env.PORT || 3000;
const cartRoute = require("./routes/cart.js");
const productRoute = require("./routes/products.js");
const userRoute = require("./routes/users.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/cart", cartRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  console.log("get got, bitch");
  res.send("testing: one, two, tree");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
