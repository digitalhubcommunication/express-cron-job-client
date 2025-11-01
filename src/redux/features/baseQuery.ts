import { getUserInfo } from "@/utils/token";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: `https://expresscronjob.com/api`,
    credentials: "include",
     prepareHeaders: (headers) => {
      const user = getUserInfo();
      if (user) {
        headers.set("Authorization", `Bearer ${user.accessToken}`);
      }

      // Optional: Add more custom headers
      headers.set("Accept", "application/json");
      headers.set("X-App-Version", "1.0.0");

      return headers;
    },
  })