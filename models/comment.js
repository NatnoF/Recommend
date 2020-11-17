const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: { type: String, required: true },
  userId: { type: String, required: true}
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;