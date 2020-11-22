const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  recommend: { type: String, required: true },
  text: { type: String, required: true  },
  username: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  bookId: { type: String, required: true }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;