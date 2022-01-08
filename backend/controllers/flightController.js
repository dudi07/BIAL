import asyncHandler from "express-async-handler";
import Flight from "../models/flightModel.js";

const getFlights = asyncHandler(async (req, res) => {
  const flights = await Flight.find({
    origin: req.query.origin,
    destination: req.query.destination,
  }).limit(10);

  res.json(flights);
});

const getFlightById = asyncHandler(async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  console.log("Hello");
  if (flight) {
    res.json(flight);
  } else {
    res.status(404);
    throw new Error("Flight not Found");
  }
});

const modifyFlightById = asyncHandler(async (req, res) => {
  const { bookedSeats } = req.body;
  const flight = await Flight.findById(req.params.id);

  if (flight) {
    flight.availableSeats = flight.availableSeats - bookedSeats;
  } else {
    res.status(404);
    throw new Error("Flight not found");
  }
});
export { getFlights, getFlightById, modifyFlightById };
