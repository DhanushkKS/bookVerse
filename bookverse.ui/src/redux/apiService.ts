import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_ENDPOINT}/`,
  prepareHeaders: (headers) => {
    const userJson = window.localStorage.getItem("user");
    try {
      const user = JSON.parse(userJson || "");
      const token = user && user.token;
      console.log("usr", user);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    } catch (e) {
      console.error("Failed to parse user data from localstorage", e);
    }

    return headers;
  },
  //
});
export { baseQuery };
