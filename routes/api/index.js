const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book Routes
router.use("/books", bookRoutes);
