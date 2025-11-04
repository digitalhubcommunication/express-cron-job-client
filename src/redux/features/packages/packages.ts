import { IPackage } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export interface TInitialState {
  packages: IPackage[];
}

//  initial state
const initialState: TInitialState = {
  packages: [],
};

const packages = createSlice({
  name: "subscriptionPackage",
  initialState,
  reducers: {
    setPackage(state, action: { payload: IPackage }) {
      state.packages.push(action.payload);
    },
    setPackages(state, action: { payload: IPackage[] }) {
      state.packages = action.payload;
    },
    updatePackage(state, action: { payload:IPackage}) {
      state.packages = state.packages.map((p) =>
        p._id === action.payload._id ? { ...p, ...action.payload } : p
      );
    },
    deletePackage(state, action: { payload: string }) {
      state.packages = state.packages.filter((p) => p._id !== action.payload);
    },
  },
});

export const { setPackage, setPackages, updatePackage, deletePackage } =
  packages.actions;

export default packages.reducer;
