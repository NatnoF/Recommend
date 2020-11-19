const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");
const reviewRoutes = require("./reviews");
const commentRoutes = require("./comments");
const userRoutes = require("./users");

// Book Routes
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

// Review Routes
router.use("/reviews", reviewRoutes);

// Comment Routes
router.use("/comments", commentRoutes);

// User Routes
router.use("/users", userRoutes)

module.exports = router;
