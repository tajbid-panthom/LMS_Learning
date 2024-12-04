import mongoose from "mongoose";
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default db;
