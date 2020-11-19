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
  // Gets a book's info from the google books API from it's id
  getBook: function(id) {
    return axios.get("/api/google/" + id);
  },
  // Gets all reviews for a certain book from the database
  getReviews: function(id) {
    return axios.get("/api/reviews", id);
  },
  // Gets all reviews by a specifc user from the database
  getUserReviews: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  // Creates and saves a review to the database
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  },
  // Let's you update a specific review
  updateReview: function(id, reviewData) {
    return axios.put("/api/reviews/" + id, reviewData);
  },
  // Removes a specific review from the database
  deleteReview: function(id) {
    return axios.delete("/api/reviews/" + id);
  },
  getComments: function(id) {
    return axios.get("/api/comments/" + id);
  },
  saveComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  }
};
