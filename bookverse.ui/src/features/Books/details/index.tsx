import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../../redux/books/api.ts";
import { Book } from "../../../types/types.ts";
import { dummyBooks } from "../common/data.ts";
import Review from "./reviews/Review.tsx";
import { Box } from "@mui/material";

const BookDetails = () => {
  const { id } = useParams();
  // Getbookby id
  const { data } = useGetBookByIdQuery(id ?? "");
  const book: Book = data || dummyBooks[0];
  return (
    <>
      {book.title}
      {book.author}
      <Box sx={{ border: "solid 1px" }}>
        <Review bookId={book.id} />
      </Box>
    </>
  );
};
export default BookDetails;
