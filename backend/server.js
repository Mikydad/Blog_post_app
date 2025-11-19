import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postsRouter from "./routes/posts.js";

const app = express();

console.log("MONGO_URI from env:", process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.use("/api/posts", postsRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
