import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (build) => ({
    auth: build.query({
      query: () => "auth/verify",
    }),
  }),
});

export const { useAuthQuery } = apiSlice;
