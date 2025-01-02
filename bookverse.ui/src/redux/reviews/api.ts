import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService";
import { HTTP_METHODS } from "../../constants";
import { REVIEWS } from "../../helpers/url";
import { Review } from "./types";

const TAGS = { REVIEWS: "REVIEWS", REVIEW: "REVIEW" };
export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery,
  tagTypes: [TAGS.REVIEW, TAGS.REVIEWS],
  endpoints: (builder) => ({
    // Get all reviews
    getReviews: builder.query<Review[], void>({
      query: () => `${REVIEWS}/`,
      providesTags: [TAGS.REVIEWS],
    }),

    // Get reviews for a specific book
    getReviewsByBook: builder.query<Review[], { bookId: string }>({
      query: ({ bookId }) => `${REVIEWS}?id=${bookId}`,
      providesTags: [TAGS.REVIEWS],
    }),

    // Add a new review
    addReview: builder.mutation<Review, Partial<Review>>({
      query: (review) => ({
        url: `${REVIEWS}`,
        method: `${HTTP_METHODS.POST}`,
        body: review,
      }),
      invalidatesTags: [TAGS.REVIEW, TAGS.REVIEWS],
    }),

    // Delete a review by ID
    deleteReview: builder.mutation<{ message: string }, string>({
      query: (reviewId) => ({
        url: `${REVIEWS}/${reviewId}`,
        method: `${HTTP_METHODS.DELETE}`,
      }),
      invalidatesTags: [TAGS.REVIEW],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewsByBookQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
