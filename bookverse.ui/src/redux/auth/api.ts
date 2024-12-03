import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService.js";
import { HTTP_METHODS } from "../../constants.ts";
import { AUTH, LOG_IN, LOGOUT, REGISTER } from "../../helpers/url.ts";
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "./types.ts";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery,
  endpoints: (builder) => ({
    logIn: builder.mutation<LoginResponse, LoginPayload>({
      query: (payload) => ({
        url: `${AUTH}/${LOG_IN}`,
        method: HTTP_METHODS.POST,
        body: payload,
      }),
    }),

    register: builder.mutation<RegisterResponse, RegisterPayload>({
      query: (payload) => ({
        url: `${AUTH}/${REGISTER}`,
        method: HTTP_METHODS.POST,
        body: payload,
      }),
    }),

    logOut: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: `${AUTH}/${LOGOUT}`, // Assuming the logout endpoint is `/auth/logout`
        method: HTTP_METHODS.POST,
      }),
    }),
  }),
});

export const { useLogInMutation, useRegisterMutation, useLogOutMutation } =
  authenticationApi;
