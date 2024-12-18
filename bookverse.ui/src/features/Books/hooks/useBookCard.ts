import { Book } from "../../../types/types.ts";

export const useBookCard = (book: Book) => {
  //

  const fullBookTitle = book?.title;
  const bookTitle =
    fullBookTitle.length > 40
      ? `${fullBookTitle.slice(0, 37)}...`
      : `${fullBookTitle}`;

  return { fullBookTitle, bookTitle };
};
