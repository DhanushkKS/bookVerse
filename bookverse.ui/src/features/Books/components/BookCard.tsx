import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Book } from "../../../types/types.ts";
import { useBookCard } from "../hooks/useBookCard.ts";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const { bookTitle, fullBookTitle } = useBookCard(book);

  return (
    <Box m={2}>
      <Card
        sx={{
          width: 200,
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          boxShadow: 3,
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
        }}
      >
        {/* Optional Image */}
        {/*<CardMedia*/}
        {/*  component="img"*/}
        {/*  height="140"*/}
        {/*  image={book.coverImage || "/default-book-cover.jpg"} // Fallback image*/}
        {/*  alt={bookTitle}*/}
        {/*  sx={{*/}
        {/*    borderRadius: "4px 4px 0 0",*/}
        {/*  }}*/}
        {/*/>*/}

        <CardContent>
          {/* Genre and Details */}
          <Stack direction="row" spacing={1} mb={1} alignItems="center">
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textTransform: "uppercase", fontWeight: 500 }}
            >
              {book.genre}
            </Typography>
          </Stack>

          {/* Book Title with Tooltip */}
          <Tooltip title={fullBookTitle}>
            <Typography
              variant="body1"
              fontWeight="600"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {bookTitle}
            </Typography>
          </Tooltip>

          {/* Author */}
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="500"
            mt={0.5}
          >
            by {book.author}
          </Typography>

          {/* Published Year */}
          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
            fontSize="0.85rem"
          >
            Published: {book.publishedYear}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookCard;
