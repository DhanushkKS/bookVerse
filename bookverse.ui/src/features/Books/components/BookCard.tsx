import {
  Box,
  Card,
  CardContent,
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
    <Box m={1} pr={0.5} my={2}>
      <Card
        sx={{
          width: 200,
          minHeight: 250,
        }}
      >
        {/*<CardMedia*/}
        {/*  sx={{ height: 140, width: 200 }}*/}
        {/*  image={recipe?.strMealThumb || recipe?.image}*/}
        {/*  title={recipeTitle}*/}
        {/*/>*/}

        <CardContent sx={{ pl: 1, border: "solid 1px" }}>
          <Stack direction="row" spacing={1} mb={1} alignItems="center">
            <Typography
              variant="caption"
              component="div"
              textTransform="uppercase"
            >
              {book.genre}
            </Typography>
            {/*<IconButton*/}
            {/*  size="small"*/}
            {/*  color="primary"*/}
            {/*  cursor="pointer"*/}
            {/*  onClick={handleClick}*/}
            {/*  disabled={favourites || isLoading}*/}
            {/*>*/}
            {/*  {isFavourite || favourites ? (*/}
            {/*    <Favorite fontSize="small" />*/}
            {/*  ) : (*/}
            {/*    <FavoriteBorder fontSize="small" />*/}
            {/*  )}*/}
            {/*</IconButton>*/}
          </Stack>

          <Tooltip title={fullBookTitle}>
            <Typography
              variant="body2"
              component="div"
              fontWeight="600"
              fontSize="0.8rem"
            >
              {bookTitle}
            </Typography>
          </Tooltip>
          <Typography
            variant="body1"
            component="div"
            fontWeight="600"
            fontSize="0.8rem"
          >
            {book.author}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            fontWeight="600"
            fontSize="0.8rem"
          >
            {book.publishedYear}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookCard;
