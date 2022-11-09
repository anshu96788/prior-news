const express = require("express");
const mongoose = require("mongoose");
const NewsRouter = require("./routes/newsRoutes.js");

const app = express();

app.use(express.json());

const connectDB = async () => {
  // Connect to the MongoDB cluster
  
  try {
   const conn = await mongoose.connect("mongodb+srv://Anshu:GhBGHMRznvoty27c@cluster0.lvr0gum.mongodb.net/News?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
   console.log("mongo connected");
  } catch (e) {
  console.log("could not connect");
  }
}

app.use(NewsRouter);

app.listen(3000, async () => {
connectDB();
  console.log("Server is running...");
});