import { useGetBooksQuery } from "../../../redux/books/api.ts";
import { Book } from "../../../types/types.ts";
import { dummyBooks } from "../common/data.ts";
import { useLocalStorage } from "../../../hooks/useLocalStorage.ts";

type UserInfo = {
  token: string;
  userInfo: {
    email: string;
    id: string;
  };
};
const useBookList = () => {
  //get user id from local storage
  const { getItem } = useLocalStorage();
  const userData = getItem<UserInfo>("user");
  const userId = userData?.userInfo.id;
  const { data } = useGetBooksQuery({ userId });
  const books: Book[] = data;
  console.log("Books", books);
  return { books };
};
export default useBookList;
