import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  EXPAND: null | string;
};
const initialState: InitialState = {
  EXPAND: null,
};

// Create the slice with reducers for individual property changes
const SidebarToggler = createSlice({
  name: "sidebarToggler",
  initialState,
  reducers: {
    EXPAND_SIDEBAR(state, action: { payload: string | null }) {
      state.EXPAND = action.payload;
    },
  },
});

export const { EXPAND_SIDEBAR } = SidebarToggler.actions;

export default SidebarToggler.reducer;
