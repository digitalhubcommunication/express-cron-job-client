import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userActionApi = createApi({
  reducerPath: 'userActionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://expresscronjob.com/api`,
    credentials: "include"
  }),
  endpoints: (builder) => ({
    addManualCron: builder.mutation({
      query: (data) => ({
        url: '/users/profile',
        method: 'POST',
        body: data,
      }),
    }),

    // profile apis
    updateProfile:builder.mutation({
      query: (data) => ({
        url: '/users/profile',
        method: 'POST',
        body: data,
      }),
    }),

    getProfile:builder.mutation({
      query: () => ({
        url: '/users/profile',
        method: 'GET'
      }),
    }),

  }),
});

export const {useUpdateProfileMutation , useAddManualCronMutation} = userActionApi;
