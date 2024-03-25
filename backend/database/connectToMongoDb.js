import mongoose from "mongoose";

const connectToMongoDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (error) {
  }
};

export default connectToMongoDb;
