import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService.js";
import { HTTP_METHODS } from "../../constants.ts";
import { BOOKS } from "../../helpers/url.ts";
import { Book, CreateBookPayload } from "./types.ts";

const TAGS = { BOOKS: "BOOKS", BOOK: "BOOK" };

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  tagTypes: [TAGS.BOOKS, TAGS.BOOK],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], { userId?: string }>({
      query: ({ userId } = {}) => {
        const queryParam = userId ? `?userId=${userId}` : "";
        return `${BOOKS}/${queryParam}`;
      },
      providesTags: [TAGS.BOOKS],
    }),

    // Fetch a single book by ID
    getBookById: builder.query<Book, string>({
      query: (id) => `${BOOKS}/${id}`,
      providesTags: [TAGS.BOOK],
    }),

    addBook: builder.mutation<Book, CreateBookPayload>({
      query: (book) => ({
        url: `${BOOKS}`,
        method: `${HTTP_METHODS.POST}`,
        body: book,
      }),
      invalidatesTags: [TAGS.BOOKS, TAGS.BOOK],
    }),
    // Edit a book by ID
    editBook: builder.mutation<Book, { id: string; book: Partial<Book> }>({
      query: ({ id, book }) => ({
        url: `${BOOKS}/${id}`,
        method: `${HTTP_METHODS.PUT}`,
        body: book,
      }),
      invalidatesTags: [TAGS.BOOKS, TAGS.BOOK],
    }),

    // Delete a book by ID
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `${BOOKS}/${id}`,
        method: `${HTTP_METHODS.DELETE}`,
      }),
      invalidatesTags: [TAGS.BOOKS, TAGS.BOOK],
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
