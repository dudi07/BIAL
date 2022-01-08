import mongoose from "mongoose";

const flightSchema = mongoose.Schema(
  {
    flightNumber: {
      type: String,
      required: true,
    },
    airline: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    dayOfWeek: {
      type: String,
      required: true,
    },
    scheduledDepartureTime: {
      type: String,
      required: true,
    },
    scheduledArrivalTime: {
      type: String,
      required: true,
    },
    departureDate: {
      type: String,
      required: true,
    },
    arrivalDate: {
      type: String,
      required: true,
    },
    numberOfSeats: {
      type: Number,
      default: 150,
    },
    timeTaken: {
      type: String,
      default: "2:15 hrs",
    },
    price: {
      type: Number,
      default: 3000,
    },
    availableSeats: {
      type: Number,
      default: 150,
    },
  },
  {
    timestamp: true,
  }
);

const Flight = mongoose.model("Flight", flightSchema);

export default Flight;
