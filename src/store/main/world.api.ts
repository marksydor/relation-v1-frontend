import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const worldApi = createApi({
  reducerPath: "world/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (build) => ({
    searchWorlds: build.query({
      query: () => ({
        url: "world",
      }),
    }),
  }),
});

export const { useSearchWorldsQuery } = worldApi;
