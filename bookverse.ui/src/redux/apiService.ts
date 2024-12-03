import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_ENDPOINT}/`,
  prepareHeaders: (headers) => {
    //  const { user } = useAuthContext();
    const user = JSON.parse(window.localStorage.getItem("user") || "");
    const token = user && user.token;
    if (token) {
      //
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  //
});
export { baseQuery };
