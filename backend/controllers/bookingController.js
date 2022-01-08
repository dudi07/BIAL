import asyncHandler from "express-async-handler";
import Booking from "../models/bookingModel.js";

// Create new booking
// Post Request
// access Private/protected

const addBookingItem = asyncHandler(async (req, res) => {
  const { flight, passengers, cabDetails, paymentMethod } = req.body;
  if (!flight) {
    res.status(400);
    throw new Error("No Flight to book");
  } else {
    const booking = new Booking({
      user: req.user._id,
      flight,
      passengers,
      cabDetails,
      paymentMethod,
      numberOfSeats: passengers.length,
    });

    const createdBooking = await booking.save();

    res.status(201).json(createdBooking);
  }
});

// Get all the bookings done by a user
// Get Request
// Access = Private

const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id });

  res.json(bookings);
});

// Get the single booking done by a user
// Get Request
// Access = Private

const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate(
    "user",
    "name email"
  );
  console.log("Hello");
  if (booking) {
    res.json(booking);
  } else {
    res.status(404);
    throw new Error("Booking not found");
  }
});

export { addBookingItem, getMyBookings, getBookingById };
