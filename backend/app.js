import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import flights from "./data/flights.js";
import dotenv from "dotenv";
const app = express();

// app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("Flight Search app");
});

app.get("/api/flights", (req, res) => {
  res.json(flights);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} on port  ${process.env.PORT}`
  );
});
