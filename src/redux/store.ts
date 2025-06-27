import { configureStore } from "@reduxjs/toolkit";
import ModalToggler from "./features/modalToggler/ModalTogglerSlice";
import Modyfier from "./features/rootModyfier/Modyfier";

export const store = configureStore({
  reducer: {
    /* root modyfier to open dropdown, modal, menu or to toggle  between different active states */
    modyfier: Modyfier,
    modalToggler: ModalToggler,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(({
    }))
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
