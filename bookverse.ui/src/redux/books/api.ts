import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService.js";
import { HTTP_METHODS } from "../../constants.ts";
import { BOOKS } from "../../helpers/url.ts";
import { Book, CreateBookPayload } from "./types.ts";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], { userId?: string }>({
      query: ({ userId } = {}) => {
        const queryParam = userId ? `?userId=${userId}` : "";
        return `${BOOKS}/${queryParam}`;
      },
    }),

    // Fetch a single book by ID
    getBookById: builder.query<Book, string>({
      query: (id) => `${BOOKS}/${id}`,
    }),

    addBook: builder.mutation<Book, CreateBookPayload>({
      query: (book) => ({
        url: `${BOOKS}`,
        method: `${HTTP_METHODS.POST}`,
        body: book,
      }),
    }),
    // Edit a book by ID
    editBook: builder.mutation<Book, { id: string; book: Partial<Book> }>({
      query: ({ id, book }) => ({
        url: `${BOOKS}/${id}`,
        method: `${HTTP_METHODS.PUT}`,
        body: book,
      }),
    }),

    // Delete a book by ID
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `${BOOKS}/${id}`,
        method: `${HTTP_METHODS.DELETE}`,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBookByIdQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = booksApi;
