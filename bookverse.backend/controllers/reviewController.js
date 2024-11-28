const Review = require("../models/reviewModel");
const Book = require("../models/bookModel");

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("bookId", "title author")
      .populate("userId", "firstName lastName email");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};

// Create a new review
const createReview = async (req, res) => {
  const { bookId, userId, comment } = req.body;

  try {
    // Ensure the book exists
    const bookExists = await Book.findById(bookId);
    if (!bookExists) {
      return res.status(404).json({ error: "Book not found" });
    }

    const review = await Review.create({
      bookId,
      userId,
      comment,
    });
    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    res.status(400).json({ error: "Failed to create the review" });
  }
};

module.exports = {
  getAllReviews,
  createReview,
};
