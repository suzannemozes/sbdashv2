import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Donors", "Donations", "Transactions", "Stats", "Geo"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getDonors: build.query({
      query: () => "contribution/donors",
      providesTags: ["Donors"],
    }),
    getDonations: build.query({
      query: () => "contribution/donations",
      providesTags: ["Donations"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "contribution/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getStats: build.query({
      query: () => "stats/stats",
      providesTags: ["Stats"],
    }),
    getGeo: build.query({
      query: () => "contribution/geo",
      providesTags: ["Geo"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetDonorsQuery,
  useGetDonationsQuery,
  useGetTransactionsQuery,
  useGetStatsQuery,
  useGetGeoQuery,
} = api;
