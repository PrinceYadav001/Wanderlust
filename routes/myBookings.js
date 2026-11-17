const express = require("express");
const router  = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controllers/bookings.js");

// GET  /bookings/:bookingId        — confirmation / detail page
router.get("/:bookingId", isLoggedIn, wrapAsync(bookingController.showBooking));

// GET  /my-bookings                — all user bookings
router.get("/", isLoggedIn, wrapAsync(bookingController.myBookings));

// POST /bookings/:bookingId/cancel — cancel a booking
router.post("/:bookingId/cancel", isLoggedIn, wrapAsync(bookingController.cancelBooking));

module.exports = router;

