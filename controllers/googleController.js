const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results => 
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    const query= "https://www.googleapis.com/books/v1/volumes/" + req.params.id
    axios
      .get(query)
      .then(book => res.json(book.data))
      .catch(err => res.status(422).json(err));
  }
};