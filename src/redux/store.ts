import { configureStore } from "@reduxjs/toolkit";
import ModalToggler from "./features/modalToggler/ModalTogglerSlice";
import Modyfier from "./features/rootModyfier/Modyfier";
import SidebarToggler from "./features/sidebar/SidebarToggler";
import AuthSlice from "./features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    modyfier: Modyfier,
    modalToggler: ModalToggler,
    sidebarToggler: SidebarToggler,
    auth:AuthSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(({
    }))
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
