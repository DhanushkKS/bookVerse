import { Box, Link } from "@mui/material";
import BookCard from "./BookCard.tsx";
import { Book } from "../../../types/types.ts";
import { Link as RouterLink } from "react-router-dom";

import React from "react";

type BooksPanelProps = {
  books: Book[] | Omit<Book, "id">[];
  favourites?: boolean;
  category?: string;
};

const BooksPanel = ({ books }: BooksPanelProps) => {
  return (
    <Box
      component="div"
      display="flex"
      flexWrap="wrap"
      justifyContent="flex-start"
    >
      {books.map((book, index) => (
        <React.Fragment key={index}>
          <Link component={RouterLink} to={`${book?.id ?? "bookId"}`}>
            <BookCard book={book} />
          </Link>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default BooksPanel;
