const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: false },
    publishedYear: { type: Number },
    // averageRating: { type: Number, default: 0 },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Book", bookSchema);
