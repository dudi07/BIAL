import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import flights from "./data/Flight_Schedule.js";
import User from "./models/userModel.js";
import Flight from "./models/flightModel.js";
import Booking from "./models/bookingModel.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await Booking.deleteMany();
    await User.deleteMany();
    await Flight.deleteMany();

    await User.insertMany(users);
    await Flight.insertMany(flights);

    console.log("Data Imported!".green.inverse);

    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Booking.deleteMany();
    await User.deleteMany();
    await Flight.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
