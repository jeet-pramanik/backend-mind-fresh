import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    // Just use the connection string, no need for useNewUrlParser or useUnifiedTopology
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected successfully.........");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
