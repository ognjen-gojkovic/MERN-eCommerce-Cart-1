require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/connectDB");
const productRouter = require("./router/productRouter");
const stripeRouter = require("./router/Router.StripePayment");

connectDB();

const app = express();

// it just specifies type of data we are receiving from frontend
// in this case .json() format
app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api", stripeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
