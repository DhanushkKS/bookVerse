import React from "react";
import { Box, Link, IconButton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import BookCard from "./BookCard.tsx";
import { Book } from "../../../types/types.ts";
import { Link as RouterLink } from "react-router-dom";

type BooksPanelProps = {
  books: Book[];
  favourites?: boolean;
  category?: string;
};

const BooksPanel = ({ books, favourites, category }: BooksPanelProps) => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography variant="h5">
          {favourites ? "Favourite Books" : category || "All Books"}
        </Typography>
        <IconButton
          component={RouterLink}
          to="/books/create"
          sx={{ border: "1px solid", borderRadius: 2 }}
        >
          <Add />
        </IconButton>
      </Box>

      {/* Books List */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {books?.length ? (
          books.map((book, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={`/books/${book?._id ?? "bookId"}`}
              underline="none"
              sx={{ textDecoration: "none" }}
            >
              <BookCard book={book} />
            </Link>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No books found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default BooksPanel;
