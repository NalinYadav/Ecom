const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orders");
const productRoutes = require("./routes/products");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use("/orders/", orderRoutes);
app.use("/products/", productRoutes);

app.listen(5000, console.log("Listening on port 5000"));
