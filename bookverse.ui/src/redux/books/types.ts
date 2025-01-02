export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: string;
  createdBy: string;
};
export type CreateBookPayload = Omit<Book, "id">;
