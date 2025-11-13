import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { userActionApi } from "../userAction/userActionApi";

export const adminActionApi = createApi({
  reducerPath: "adminActionApi",
  baseQuery,
   tagTypes: ["user_details", "profile"],
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
        getAdminCronHistory:builder.query({
      query: (query) => ({
        url: `/admin/cron-log?${query}`,
        method: 'GET'
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
      providesTags:["user_details"]
    }),

      updateUser: builder.mutation({
      query: ({id, data}) => ({
        url: `/admin/users/${id}`,
        method: "PUT",
        body:data,
      }),
      invalidatesTags:['user_details']
    }),

     removeUserPackage: builder.mutation({
      query: (data) => ({
        url: "/admin/users/removepackage",
        method: "DELETE",
        body:data,
      }),
      invalidatesTags:['user_details']
    }),

     assignUserPackage: builder.mutation({
      query: (data) => ({
        url: "/admin/users/assignPackage",
        method: "PUT",
        body:data,
      }),
      invalidatesTags:['user_details']
    }),


    // domain crud
      addAdminManualDomain:builder.mutation({
      query: (data) => ({
        url: "/admin/crons",
        method: 'POST',
        body:data
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled; 
          dispatch(
            userActionApi.util.invalidateTags(['profile'])
          );
        } catch (error) {
          // Handle error if needed
          console.log(error)
        }
      },
      invalidatesTags:["profile"]
    }),
    // ====== admin action ends =======
  }),
});

export const {
  // package 
  useDeletePackageMutation,
  useAddPackageMutation,
  useLazyGetPackagesQuery,
  useGetPackagesQuery,
  useUpdatePackageMutation,

  // cron history
  useLazyGetAdminCronHistoryQuery,

  // dashboard query
  useGetDashboardInfoQuery,

  // user query
  useLazyGetUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useRemoveUserPackageMutation,
  useAssignUserPackageMutation,

  // domain crud
  useAddAdminManualDomainMutation
} = adminActionApi;
