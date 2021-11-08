require("dotenv").config();

const productsData = require("./data/ProductsData");
const connectDB = require("./config/connectDB");
const Product = require("./models/Products");

connectDB();

/**
 * just a simple script for initial data import into our database
 * it's run via script defined in package.json
 * run in terminal
 */

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data import success.");

    process.exit();
  } catch (error) {
    console.error("Data import Failed...");
    process.exit(1);
  }
};

importData();
