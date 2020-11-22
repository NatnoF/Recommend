const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

// Matches with "/api/reviews"
router.route("/")
  .post(reviewController.create);

// Matches with "/api/reviews/:id"
router
  .route("/:id")
  .get(reviewController.findById)
  .put(reviewController.update)
  .delete(reviewController.remove);

// Matches with "/api/reviews/book/:id"
router
  .route("/book/:id")
  .get(reviewController.findAll);

// Matches with "/api/reviews/user/:id"
  router
    .route("/user/:id")
    .get(reviewController.findOne);

module.exports = router;
