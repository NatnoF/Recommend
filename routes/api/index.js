const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");
const reviewRoutes = require("./reviews");
const commentRoutes = require("./comments");

// Book Routes
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

// Review routes
router.use("/reviews", reviewRoutes);

// Comment routes
router.use("/comments", commentRoutes);

module.exports = router;
