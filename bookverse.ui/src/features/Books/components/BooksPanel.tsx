import { Box, Link } from "@mui/material";
import BookCard from "./BookCard.tsx";
import { Book } from "../../../types/types.ts";
import { Link as RouterLink } from "react-router-dom";

import React from "react";
import { Add } from "@mui/icons-material";

type BooksPanelProps = {
  books: Book[];
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
      <Link component={RouterLink} to={`/books/create`}>
        <Add />
      </Link>
      {books?.map((book, index) => (
        <React.Fragment key={index}>
          <Link component={RouterLink} to={`/books/${book?._id ?? "bookId"}`}>
            <BookCard book={book} />
          </Link>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default BooksPanel;
