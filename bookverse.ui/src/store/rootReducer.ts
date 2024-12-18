import { combineReducers } from "@reduxjs/toolkit";
import { authenticationApi } from "../redux/auth/api.ts";
import userReducer from "../redux/useSlice";
import { booksApi } from "../redux/books/api.ts";
import { reviewsApi } from "../redux/reviews/api.ts";

export const rootReducer = combineReducers({
  user: userReducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [booksApi.reducerPath]: booksApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
  //
});
