import BooksPanel from "./components/BooksPanel.tsx";
import useBookList from "./hooks/useBookList.ts";

const BookList = () => {
  const { books } = useBookList();
  return <>{<BooksPanel books={books} favourites />}</>;
};
export default BookList;
