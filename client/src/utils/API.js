/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", {params: {q: "title:" + q}});
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getBook: function(id) {
    return axios.get("/api/google/" + id);
  },
  getReviews: function(id) {
    return axios.get("/api/reviews", id);
  },
  getUserReviews: function(id) {
    return axios.get("/api/reviews" + id);
  }
};
