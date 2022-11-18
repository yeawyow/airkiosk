// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHisUrl } from "../../Constants";

// Define a service using a base URL and expected endpoints
export const attractionApi = createApi({
  reducerPath: "attractionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiHisUrl,
  }),
  endpoints: (builder) => ({
    getAllAttractions: builder.query({
      query: (cid) => `getpatient/${cid}`,
    }),
    getPatient: builder.query({
      query: (cid) => `getpatient/${cid}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAttractionsQuery, useGetPatientQuery } = attractionApi;
