const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.render("views/add-product");
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
