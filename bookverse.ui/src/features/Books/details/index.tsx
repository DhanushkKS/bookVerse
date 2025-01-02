import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../../redux/books/api.ts";
import { Book } from "../../../types/types.ts";
import Review from "./reviews/Review.tsx";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

const BookDetails = () => {
  const { id } = useParams();
  console.log("book id", id);

  // Fetch book details by ID
  const { data } = useGetBookByIdQuery(id ?? "");
  const book: Book = data;

  return (
    <Box sx={{ padding: 3 }}>
      {book ? (
        <Card
          sx={{
            maxWidth: "800px",
            margin: "auto",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {book.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Author: {book.author}
            </Typography>
            <Divider sx={{ marginY: 2 }} />

            <Box sx={{ marginTop: 4 }}>
              <Review bookId={book._id} />
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "center", marginTop: 4 }}
        >
          Loading book details...
        </Typography>
      )}
    </Box>
  );
};

export default BookDetails;
