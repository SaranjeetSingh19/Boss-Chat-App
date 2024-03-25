import mongoose from "mongoose";

const connectToMongoDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB Server!!");
  } catch (error) {
    console.log("MongoDB Connecting Error:", error);
  }
};

export default connectToMongoDb;
