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
    }),

     addManualDomain:builder.mutation({
      query: (data) => ({
        url: "/users/manual-domain",
        method: 'POST',
        body:data
      }),
    }),

    // manual domain crud
      removeManualDomain:builder.mutation({
      query: (id) => ({
        url: `/users/manual-domain/${id}`,
        method: 'DELETE',
      }),
    }),

      updateManualDomain:builder.mutation({
      query: ({id,data}) => ({
        url: `/users/manual-domain/${id}`,
        method: 'PUT',
        body:data
      }),
    }),


  // transaction history
     getTransactionHistory: builder.query({
      query: (query) => ({
        url: `/users/transactions?${query}`,
        method: 'GET',
      }),
    }),

      initializeTransaction: builder.mutation({
      query: (data) => ({
        url: "/users/initiate-subscribe-package",
        method: 'POST',
        body:data
      }),
    }),

    subscribePackage: builder.mutation({
      query: (data) => ({
        url: "/users/subscribe-package",
        method: 'POST',
        body:data
      }),
      invalidatesTags: ['Profile']
    }),


    // public apis
     sendMail: builder.mutation({
      query: (data) => ({
        url: "/mail",
        method: 'POST',
        body:data
      }),
      invalidatesTags: ['Profile']
    }),


    // ====== user action ends =======


  }),
});

export const {
  // domain hooks
  useAddManualDomainMutation,
  useUpdateDefaultDomainMutation,

  // manual domain hook
  useRemoveManualDomainMutation,
  useUpdateManualDomainMutation,

  // cron log hooks
  useClearCronLogMutation,
  useLazyGetCronLogQuery,

  // transaction history
  useLazyGetTransactionHistoryQuery,
  useInitializeTransactionMutation,
  useSubscribePackageMutation,

  // profile hooks
  useUpdateProfileMutation,
  useLazyGetProfileQuery,

  // public apis
  useSendMailMutation,
} = userActionApi;
