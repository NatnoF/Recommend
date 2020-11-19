const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Review.find({ bookId: req.params.bookId })
      .then(dbReview => res.json(dbReview))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Review.find({ userId: req.params.userId })
      .then(dbReview => res.json(dbReview))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Review.create(req.body)
      .then(dbReview => res.json(dbReview))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Review.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbReview => res.json(dbReview))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Review.findById(req.params.id)
      .then(dbReview => dbReview.remove())
      .then(dbReview => res.json(dbReview))
      .catch(err => res.status(422).json(err));
  }
}