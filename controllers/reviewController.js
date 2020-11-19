const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Review.find({ bookId: req.params.bookId })
      .then(dbReview => res.json(dbReview))
      .catch(err => res.status(422).json(err))
  }
}