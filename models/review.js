const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  recommend: { type: Boolean, required: true },
  text: { type: String, required: true  },
  userId: { type: Number, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  bookId: { type: Number, required: true },
  comments: { type: [String] }
});

const Book = mongoose.model("Review", reviewSchema);

module.exports = Book;