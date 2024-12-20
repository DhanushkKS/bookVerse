import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService";
import { HTTP_METHODS } from "../../constants";
import { REVIEWS } from "../../helpers/url";
import { Review } from "./types";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery,
  endpoints: (builder) => ({
    // Get all reviews
    getReviews: builder.query<Review[], void>({
      query: () => `${REVIEWS}/`,
    }),

    // Get reviews for a specific book
    getReviewsByBook: builder.query<Review[], { bookId: string }>({
      query: ({ bookId }) => `${REVIEWS}?bookId=${bookId}`,
    }),

    // Add a new review
    addReview: builder.mutation<Review, Partial<Review>>({
      query: (review) => ({
        url: `${REVIEWS}`,
        method: `${HTTP_METHODS.POST}`,
        body: review,
      }),
    }),

    // Delete a review by ID
    deleteReview: builder.mutation<{ message: string }, string>({
      query: (reviewId) => ({
        url: `${REVIEWS}/${reviewId}`,
        method: `${HTTP_METHODS.DELETE}`,
      }),
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewsByBookQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
