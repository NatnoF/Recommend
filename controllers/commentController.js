const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Comment.find({ reviewId: req.params.reviewId })
      .then(dbComment => res.json(dbComment))
      .catch(err => res.status(422).json(err));
  }
}