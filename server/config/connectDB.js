require("dotenv");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected...");
  } catch (error) {
    console.error("Connection failed...");
    process.exit(1);
  }
};

module.exports = connectDB;
