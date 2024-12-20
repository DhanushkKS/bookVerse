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

const getReviewsByBook = async (req, res) => {
  const { bookId } = req.query; // Get the bookId from query parameters

  try {
    // Ensure bookId is provided
    if (!bookId) {
      return res.status(400).json({ error: "Book ID is required" });
    }

    // Fetch reviews from the database
    const reviews = await Review.find({ bookId })
      .populate("bookId", "title author genre publishedYear") // Populate book details
      .populate("userId", "firstName lastName email"); // Populate user details

    // If no reviews found
    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this book" });
    }

    // Return the reviews
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
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
  getReviewsByBook,
};
