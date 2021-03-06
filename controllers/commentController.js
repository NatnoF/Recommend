const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Comment.find({ reviewId: req.params.id })
      .then(dbComment => res.json(dbComment))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Comment.create(req.body)
      .then(dbComment => res.json(dbComment))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Comment.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbComment => res.json(dbComment))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Comment.findById(req.params.id)
      .then(dbComment => dbComment.remove())
      .then(dbComment => res.json(dbComment))
      .catch(err => res.status(422).json(err));
  }
};
