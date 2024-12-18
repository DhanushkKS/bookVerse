import { useGetBooksQuery } from "../../../redux/books/api.ts";
import { Book } from "../../../types/types.ts";
import { dummyBooks } from "../common/data.ts";

const useBookList = () => {
  //
  const { data } = useGetBooksQuery();
  const books: Book[] | Omit<Book, "id">[] = data || dummyBooks;
  return { books };
};
export default useBookList;
