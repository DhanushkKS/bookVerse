const Book = require("../models/bookModel");

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const { userId } = req.query; // Extract userId from query parameters

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" }); // Validate input
    }

    // Fetch books created by the relevant user
    const books = await Book.find({ createdBy: userId }).populate(
      "createdBy",
      "firstName lastName email",
    );

    if (books.length === 0) {
      return res.status(404).json({ message: "No books found for this user" }); // Handle no books found
    }

    res.status(200).json(books); // Return books for the given user
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" }); // Handle server errors
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id).populate(
      "createdBy",
      "firstName lastName email",
    );
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the book" });
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, genre, publishedYear, createdBy } = req.body;

  try {
    const book = await Book.create({
      title,
      author,
      genre,
      publishedYear,
      createdBy,
    });
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(400).json({ error: "Failed to add the book" });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, publishedYear } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      genre,
      publishedYear,
    });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    res.status(400).json({ error: "Failed to update the book" });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the book" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
