import express from "express";
const router = express.Router();

import {
  addBookingItem,
  getMyBookings,
  getBookingById,
} from "../controllers/bookingController.js";
import { protect } from "../middelware/authMiddelware.js";

router.route("/").post(protect, addBookingItem);
router.route("/mybookings").get(protect, getMyBookings);
router.route("/:id").get(protect, getBookingById);

export default router;
