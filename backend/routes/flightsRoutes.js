import express from "express";
const router = express.Router();

import {
  getFlights,
  getFlightById,
  modifyFlightById,
} from "../controllers/flightController.js";

//
router.route("/").get(getFlights);
router.route("/:id").get(getFlightById);
router.route("/:id").put(modifyFlightById);
export default router;
