import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const userActionApi = createApi({
  reducerPath: 'userActionApi',
  baseQuery,
   tagTypes: ["Profile"],
  endpoints: (builder) => ({
    // profile apis
    updateProfile:builder.mutation({
      query: (data) => ({
        url: '/users/profile',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Profile']
    }),

    getProfile:builder.query({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
       providesTags: ['Profile']
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

    // default domain crud
      updateDefaultDomain:builder.mutation({
      query: ({id,data}) => ({
        url: `/users/default-domain/${id}`,
        method: 'PUT',
        body:data
      }),
      invalidatesTags: ['Profile']
    }),

     addManualDomain:builder.mutation({
      query: (data) => ({
        url: "/users/manual-domain",
        method: 'POST',
        body:data
      }),
      invalidatesTags: ['Profile']
    }),

    // manual domain crud
      removeManualDomain:builder.mutation({
      query: (id) => ({
        url: `/users/manual-domain/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Profile']
    }),

      updateManualDomain:builder.mutation({
      query: (data) => ({
        url: "/users/manual-domain",
        method: 'POST',
        body:data
      }),
      invalidatesTags: ['Profile']
    }),

    //  addManualCron: builder.mutation({
    //   query: (data) => ({
    //     url: '/users/profile',
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),

    // ====== user action ends =======

  }),
});

export const {
  // domain hooks
  useAddManualDomainMutation,
  useUpdateDefaultDomainMutation,

  // manual domain hook
  useRemoveManualDomainMutation,

  // cron log hooks
  useClearCronLogMutation,
  useLazyGetCronLogQuery,

  // profile hooks
  useUpdateProfileMutation,
  useLazyGetProfileQuery,
} = userActionApi;
