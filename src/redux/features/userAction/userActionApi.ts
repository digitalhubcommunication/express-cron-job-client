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

    getProfile:builder.query({
      query: () => ({
        url: '/users/profile',
        method: 'GET'
      }),
    }),

    // cron log
    getCronLog:builder.query({
      query: (query) => ({
        url: `/users/cron-log?${query}`,
        method: 'GET'
      }),
    }),

    clearCronLog:builder.mutation({
      query: (query) => ({
        url: `/users/cron-log?${query}`,
        method: 'DELETE'
      }),
    }),

    // domains crud
      updateDefaultDomain:builder.mutation({
      query: ({id,data}) => ({
        url: `/users/default-domain/${id}`,
        method: 'PUT',
        body:data
      }),
    }),
      addManualDomain:builder.mutation({
      query: (data) => ({
        url: "/users/manual-domain",
        method: 'POST',
        body:data
      }),
    }),

      removeManualDomain:builder.mutation({
      query: (id) => ({
        url: `/users/domain/${id}`,
        method: 'DELETE',
      }),
    }),

    // ====== user action ends =======

  }),
});

export const {
  // domain hooks
  useAddManualDomainMutation,
  useAddManualCronMutation,
  useUpdateDefaultDomainMutation,

  // cron log hooks
  useClearCronLogMutation,
  useLazyGetCronLogQuery,

  // profile hooks
  useUpdateProfileMutation,
  useLazyGetProfileQuery,
} = userActionApi;
