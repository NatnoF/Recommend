const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  recommend: { type: Boolean, required: true },
  text: { type: String, required: true  },
  userId: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  bookId: { type: String, required: true },
  comments: { type: [String] }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;