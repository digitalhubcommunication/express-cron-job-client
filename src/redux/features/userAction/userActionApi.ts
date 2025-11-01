import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const userActionApi = createApi({
  reducerPath: 'userActionApi',
  baseQuery,
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
        method: 'PUT',
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
