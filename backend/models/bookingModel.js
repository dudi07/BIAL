import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: "User",
    },
    flight: {
      destination: { type: String, required: true },
      origin: { type: String, required: true },
      price: { type: Number },
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: "Flight",
    },

    passengers: [
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        age: { type: Number, required: true },
        gender: { type: String, required: true },
      },
    ],
    cabDetails: {
      pickUpLocation: { type: String },
      dropLocation: { type: String },
      phoneNumber: { type: String },
      typeOfCab: { type: String },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    numberOfSeats: {
      type: Number,
      required: true,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timeStamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
