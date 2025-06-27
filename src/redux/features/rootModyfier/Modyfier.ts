import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  EXPAND: null | string;
  preventScrolling: boolean;
};
const initialState: InitialState = {
  EXPAND: null,
  preventScrolling: false,
};

// Create the slice with reducers for individual property changes
const Modyfier = createSlice({
  name: "modyfier",
  initialState,
  reducers: {
    SET_EXPAND(state, action: { payload: string | null }) {
      state.EXPAND = action.payload;
    },
    updatePreventScrolling(state, action: { payload: boolean }) {
      state.preventScrolling = action.payload;
    },
  },
});

export const { SET_EXPAND,updatePreventScrolling } = Modyfier.actions;

export default Modyfier.reducer;
