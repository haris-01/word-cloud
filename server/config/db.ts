import mongoose from "mongoose";

const connectDB = async () => {
  console.log("connecting database");
  if (process.env.MONGO_URI) {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected ${connect.connection.host}`);
  } else {
    console.log("mongo DB URI not found");
  }
};

module.exports = connectDB;
