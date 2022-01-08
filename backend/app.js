import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middelware/errorMiddelware.js";
import flightsRoutes from "./routes/flightsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import cors from "cors";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/flights", cors(), flightsRoutes);
app.use("/api/users", cors(), userRoutes);
app.use("/api/bookings", cors(), bookingRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Flight Search app");
});
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} on port  ${process.env.PORT}`
  );
});
