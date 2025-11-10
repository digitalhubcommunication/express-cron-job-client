import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const packageApi = createApi({
  reducerPath: 'packageApi',
  baseQuery,
  endpoints: (builder) => ({
     getPackages: builder.query({
      query: () => ({
        url: "/packages",
        method: "GET",
      }),
    }),
})
});

export const {useGetPackagesQuery} = packageApi;
