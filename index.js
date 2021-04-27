const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.send("<h1>404: Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server listening for requests on Port 3000");
});
