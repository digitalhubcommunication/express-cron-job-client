import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const adminActionApi = createApi({
  reducerPath: "adminActionApi",
  baseQuery,
  endpoints: (builder) => ({
    // packages
    getPackages: builder.query({
      query: () => ({
        url: "/admin/packages",
        method: "GET",
      }),
    }),

    updatePackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/packages/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    addPackage: builder.mutation({
      query: (data) => ({
        url: "/admin/packages",
        method: "POST",
        body: data,
      }),
    }),

    deletePackage: builder.mutation({
      query: (id) => ({
        url: `/admin/packages/${id}`,
        method: "DELETE",
      }),
    }),

    //====== cron log history ======
    getAdminCronHistory: builder.query({
      query: () => ({
        url: "/admin/cron-log",
        method: "GET",
      }),
    }),

    deleteAdminCronHistory: builder.mutation({
      query: () => ({
        url: "/admin/cron-log",
        method: "GET",
      }),
    }),

    // dashboard information
    getDashboardInfo: builder.query({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
      }),
    }),

    getAnalyticsHistory: builder.mutation({
      query: () => ({
        url: "/admin/analytics",
        method: "GET",
      }),
    }),

    // ===== users information =======
    getUsers: builder.query({
      query: (query) => ({
        url: `/admin/users?${query}`,
        method: "GET",
      }),
    }),

    getSingleUser: builder.query({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: "GET",
      }),
    }),

      updateUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: "PUT",
      }),
    }),
    // ====== admin action ends =======
  }),
});

export const {
  useDeletePackageMutation,
  useAddPackageMutation,
  useLazyGetPackagesQuery,
  useGetPackagesQuery,
  useUpdatePackageMutation,
  useLazyGetAdminCronHistoryQuery,
  useGetDashboardInfoQuery,
  useLazyGetUsersQuery,
  useGetSingleUserQuery,
} = adminActionApi;
