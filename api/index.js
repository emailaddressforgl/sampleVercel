import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("hi");

  res.send("Hii");
});

app.listen(3000, () => {
  console.log("Started");
});
