import mongoose from "mongoose";
import ProductModel from "../models/Product";
import commentModel from "../models/Comments";

/**
 * Connects to the MongoDB database using Mongoose.
 * Ensures a single connection instance.
 * @returns {Promise<boolean>} - Returns true if successfully connected, otherwise false.
 */

const connectedToDB = async (): Promise<boolean> => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected to the database.");
      return true;
    }

    // Validate environment variable
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URL environment variable is not defined.");
    }

    await mongoose.connect(mongoUrl);

    console.log("successfully connected to DB");

    ProductModel;
    commentModel;

    return true;
  } catch (error) {
    console.log("faild to connection", error);
    return false;
  }
};

export default connectedToDB;
