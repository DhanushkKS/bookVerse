import { authenticationApi } from "../redux/auth/api.ts";
import { booksApi } from "../redux/books/api.ts";
import { reviewsApi } from "../redux/reviews/api.ts";

export const rootMiddleware = [
  authenticationApi.middleware,
  booksApi.middleware,
  reviewsApi.middleware,
];
