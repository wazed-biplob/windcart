import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../interface/types";

const API_URL = "http://localhost:5000/api/v1/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData: IUser) => ({
        url: "/create-user",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
export const { useCreateUserMutation } = authApi;
