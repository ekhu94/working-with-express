const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("In the first middleware");
  next();
});

app.use("/add-product", (req, res) => {
  res.send(
    '<form method="POST" action="/product"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In the second middleware");
  res.send(
    '<h1>Welcome to my Express App</h1><a href="/add-product">New Product</a>'
  );
});

app.listen(3000, () => {
  console.log("Server listening for requests on Port 3000");
});
