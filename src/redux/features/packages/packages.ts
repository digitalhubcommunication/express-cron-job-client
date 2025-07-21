import { TDomain, TPackage } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export interface TInitialState {
    packages: TPackage[]
}

//  initial state
const initialState: TInitialState = {
    packages: []
};

const packages = createSlice({
    name: "subscriptionPackage",
    initialState,
    reducers: {
        setPackage(state, action: { payload: TPackage }) {
            state.packages.push(action.payload);
        },
        setPackages(state, action: { payload: TPackage[] }) {
            state.packages = action.payload;
        },
        updatePackage(state, action: { payload: { data: TDomain, id: string } }) {
            state.packages = state.packages.filter(p => p._id === action.payload.id ? action.payload.data : p)
        },
        deletePackage(state, action: { payload: string }) {
            state.packages = state.packages.filter(p => p._id !== action.payload)
        }
    }
});

export const { setPackage, setPackages, updatePackage, deletePackage } = packages.actions;

export default packages.reducer;
