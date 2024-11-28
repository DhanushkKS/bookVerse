const express = require("express");
const {
  getAllReviews,
  createReview,
} = require("../controllers/reviewController");

const router = express.Router();

// GET all reviews
router.get("/", getAllReviews);

// POST a new review
router.post("/", createReview);

module.exports = router;
