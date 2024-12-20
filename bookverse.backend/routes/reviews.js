const express = require("express");
const {
  getAllReviews,
  createReview,
  getReviewsByBook,
} = require("../controllers/reviewController");

const router = express.Router();

// GET all reviews
// router.get("/", getAllReviews);
router.get("/", getReviewsByBook);

// POST a new review
router.post("/", createReview);

module.exports = router;
