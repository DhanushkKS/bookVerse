const express = require("express");
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");
// const authenticate = require("../middlewares/authenticate"); // Middleware for authentication

const router = express.Router();

// GET all books
router.get("/", getAllBooks);

// GET a single book by ID
router.get("/:id", getBookById);

// POST a new book
router.post("/", createBook); // Only authenticated users can create books
// router.post("/", authenticate, createBook); // Only authenticated users can create books

// PUT (update) a book by ID
router.put("/:id", updateBook); // Only authenticated users can update books

// DELETE a book by ID
router.delete("/:id", deleteBook); // Only authenticated users can delete books

module.exports = router;
