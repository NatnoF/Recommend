const db = require("../models");

// Defining methods for bookController
module.exports = {
  findAll: function(req, res) {
    db.Book.find({usersSaved: req.params.id})
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req,res) {
    db.Book.findById({googleId: req.params.id})
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body.user);
    db.Book.findOneAndUpdate({ googleId: req.params.id }, {$addToSet: {usersSaved: req.body.user}})
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
