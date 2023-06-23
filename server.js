const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orders");
const productRoutes = require("./routes/products");
const collectionRoutes = require("./routes/collections");
const productCategoryRoutes = require("./routes/productCategory");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use("/orders/", orderRoutes);
app.use("/products/", productRoutes);
app.use("/collections/", collectionRoutes);
app.use("/productCategory/", productCategoryRoutes);

app.listen(5000, console.log("Listening on port 5000"));
