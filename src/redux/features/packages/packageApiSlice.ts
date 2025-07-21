import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const packageApi = createApi({
  reducerPath: 'packageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include"
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (userData) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: userData,
      }),
    }),
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: credentials,
      }),
    }),
    verfifyEmail: builder.mutation({
      query: (credentials) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body: credentials,
      }),
    }),
    regenerateOtp: builder.mutation({
      query: (credentials) => ({
        url: '/auth/regenerate-otp',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useVerfifyEmailMutation, useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation,useRegenerateOtpMutation } = packageApi;
