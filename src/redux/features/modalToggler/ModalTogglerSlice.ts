import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  activeModalID: string | null;
}

// initial state
const initialState: InitialState = {
  activeModalID: null,
};
const ModalToggler = createSlice({
  name: "ModalToggler",
  initialState,
  reducers: {
    toggleModal(state, action: { payload: string | null }) {
      state.activeModalID = action.payload;
    },
  },
});

export const { toggleModal } = ModalToggler.actions;
export default ModalToggler.reducer;
