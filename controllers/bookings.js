const Booking = require("../models/booking");
const Listing = require("../models/listing");

// Show booking form
module.exports.renderBookingForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("bookings/new.ejs", { listing });
};

// Create a new booking
module.exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    const { checkIn, checkOut, guests } = req.body.booking;

    const checkInDate  = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Basic date validation
    if (checkOutDate <= checkInDate) {
        req.flash("error", "Check-out date must be after check-in date");
        return res.redirect(`/listings/${id}/bookings/new`);
    }
    if (checkInDate < new Date().setHours(0, 0, 0, 0)) {
        req.flash("error", "Check-in date cannot be in the past");
        return res.redirect(`/listings/${id}/bookings/new`);
    }

    // Calculate total nights and price
    const msPerDay    = 1000 * 60 * 60 * 24;
    const nights      = Math.ceil((checkOutDate - checkInDate) / msPerDay);
    const totalPrice  = nights * listing.price;

    const newBooking = new Booking({
        listing: listing._id,
        user:    req.user._id,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests,
        totalPrice,
    });

    await newBooking.save();
    req.flash("success", `Booking confirmed! 🎉 ${nights} night(s) for ₹${totalPrice.toLocaleString("en-IN")}`);
    res.redirect(`/bookings/${newBooking._id}`);
};

// Show booking confirmation / detail
module.exports.showBooking = async (req, res) => {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId)
        .populate({ path: "listing", populate: { path: "owner" } })
        .populate("user");

    if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/listings");
    }

    // Only the booking owner can view it
    if (!booking.user._id.equals(req.user._id)) {
        req.flash("error", "You are not authorised to view this booking");
        return res.redirect("/listings");
    }

    res.render("bookings/show.ejs", { booking });
};

// Show all bookings of current user
module.exports.myBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate("listing")
        .sort({ createdAt: -1 });
    res.render("bookings/index.ejs", { bookings });
};

// Cancel a booking
module.exports.cancelBooking = async (req, res) => {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/my-bookings");
    }
    if (!booking.user.equals(req.user._id)) {
        req.flash("error", "You are not authorised to cancel this booking");
        return res.redirect("/my-bookings");
    }

    booking.status = "cancelled";
    await booking.save();
    req.flash("success", "Booking cancelled successfully");
    res.redirect("/my-bookings");
};

