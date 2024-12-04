import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";
dotenv.config({});

const PORT = process.env.PORT;
const app = express();
db();
app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
