import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import api from "./routers/api.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// connect mongodb

configDotenv();

app.use("/api/post", api);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
