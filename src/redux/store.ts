import { configureStore } from "@reduxjs/toolkit";
import ModalToggler from "./features/modalToggler/ModalTogglerSlice";
import Modyfier from "./features/rootModyfier/Modyfier";
import SidebarToggler from "./features/sidebar/SidebarToggler";
import AuthSlice from "./features/auth/AuthSlice";
import packagesSlice from "./features/packages/packages";
import { authApi } from "./features/auth/AuthApiSlice";
import {userActionApi } from "./features/userAction/userActionApi";
import {adminActionApi } from "./features/adminActions/adminActions";
import { packageApi } from "./features/packages/packageApiSlice";

export const store = configureStore({
  reducer: {
    modyfier: Modyfier,
    modalToggler: ModalToggler,
    sidebarToggler: SidebarToggler,
    auth: AuthSlice,
    packages: packagesSlice,

    [authApi.reducerPath]:authApi.reducer,
    [userActionApi.reducerPath]:userActionApi.reducer,
    [adminActionApi.reducerPath]:adminActionApi.reducer,
    [packageApi.reducerPath]:packageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(userActionApi.middleware).concat(adminActionApi.middleware).concat(packageApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
