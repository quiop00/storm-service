const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: String,
    // url media: video/image
    media: String,
    mediaType: {
      type: String,
      enum: ["IMAGE", "VIDEO"],
    },
    stormId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;