import { IUser, TDomain, TManualDomain } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export interface TInitialState {
    authUser: IUser | null;
    defaultDomains: TDomain[];
    manualDomains: TManualDomain[] | undefined
    isUserLoading: boolean;
}

//  initial state
const initialState: TInitialState = {
    authUser: null,
    manualDomains: [],
    defaultDomains: [],
    isUserLoading:true,
};

// ==========  Create the slice with reducers for individual property changes ============
const AuthSlice = createSlice({
    name: "auth-info",
    initialState,
    reducers: {
        setAuthUser(state, action: { payload: IUser | null }) {
            state.authUser = action.payload;
        },
        updateDefaultDomain(state, action: { payload: TDomain[] }) {
            state.defaultDomains = action.payload;
        },
        updateManualDomain(state, action: { payload: TManualDomain[] }) {
            state.manualDomains = action.payload;
        },
        setUserDataLoading(state, action: { payload: boolean }) {
            state.isUserLoading = action.payload;
        },
        resetAuthInfo: () => initialState
    }
});

export const { updateDefaultDomain, updateManualDomain, setAuthUser, resetAuthInfo, setUserDataLoading } = AuthSlice.actions;

export default AuthSlice.reducer;
