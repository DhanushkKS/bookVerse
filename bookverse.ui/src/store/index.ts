import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer.ts";
import { rootMiddleware } from "./rootMiddleware.ts";
import { useDispatch as useReduxDispatch } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([...rootMiddleware]),
});
export const useDispatch = () => useReduxDispatch();

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
