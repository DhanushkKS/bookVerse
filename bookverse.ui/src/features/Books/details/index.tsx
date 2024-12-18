import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../../redux/books/api.ts";
import { Book } from "../../../types/types.ts";
import { dummyBooks } from "../common/data.ts";
import Review from "./reviews/Review.tsx";

const BookDetails = () => {
  const { id } = useParams();
  // Getbookby id
  const { data } = useGetBookByIdQuery(id ?? "");
  const book: Book = data || dummyBooks[0];
  return (
    <>
      {book.title}
      {book.author}
      <Review bookId={book.id} />
    </>
  );
};
export default BookDetails;
