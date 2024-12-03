import { combineReducers } from "@reduxjs/toolkit";
import { authenticationApi } from "../redux/auth/api.ts";

export const rootReducer = combineReducers({
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  //
});
