import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const Port = process.env.PORT || null;

app.get("/", (req, res) => {
  res.send("Hello Soham");
});

app.listen(Port, () => {
  console.log(`Server is running at ${Port}`);
});
