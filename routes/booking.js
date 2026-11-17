const express = require("express");
const router  = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controllers/bookings.js");

// GET  /listings/:id/bookings/new  — booking form
router.get("/new", isLoggedIn, wrapAsync(bookingController.renderBookingForm));

// POST /listings/:id/bookings      — create booking
router.post("/", isLoggedIn, wrapAsync(bookingController.createBooking));

module.exports = router;

