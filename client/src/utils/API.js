/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", {params: {q: "title:" + q}});
  },
  // Gets all saved books from a specific user
  getSavedBooks: function(id) {
    return axios.get("/api/books/book/" + id);
  },
  // Sees if there's a book saved in the database with the google id
  getSavedBookById: function(id) {
    return axios.get("/api/books", + id);
  },
  // Updates the users Saved if a book is already in the database
  updateBook: function(id, bookData)
  {
    return axios.put("/api/books/" + id, bookData);
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
    return axios.get("/api/reviews/book/" + id);
  },
  // Gets all reviews by a specifc user from the database
  getUserReviews: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  getReview: function(id) {
    return axios.get("/api/reviews/user/" + id);
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
  // Gets all comments for a specific review
  getComments: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Creates and saves a comment to the database
  saveComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  },
  // Let's you update a specific comment
  updateComment: function(id, commentData) {
    return axios.put("/api/comments/" + id, commentData);
  },
  // Removes a specific comment from the database
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  }
};
