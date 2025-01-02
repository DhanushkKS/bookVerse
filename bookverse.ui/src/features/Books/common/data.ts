import { Book } from "../../../types/types.ts";

export const dummyBooks: Omit<Book, "id">[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishedYear: "1925",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: "1960",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: "1949",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: "1951",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: "1813",
  },
];
