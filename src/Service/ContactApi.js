import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => "/contacts",
    }),
  }),
});

export const { useContactsQuery } = contactApi;
