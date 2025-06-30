import { user } from "@/data/DemoData";
import { IUser, TDomain, TManualDomain } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export interface TInitialState {
    authAccessToken: string | null;
    authRefreshToken: string | null;
    authUser: IUser | null;
    defaultDomains: TDomain[];
    manualDomains: TManualDomain[] | undefined
}

//  initial state
const initialState: TInitialState = {
    authAccessToken: null,
    authRefreshToken: null,
    // TODO: have to get the data from backend
    authUser: user,
    manualDomains: user.manualDomains,
    defaultDomains: user.defaultDomains,
};

// ==========  Create the slice with reducers for individual property changes ============
const AuthSlice = createSlice({
    name: "auth-info",
    initialState,
    reducers: {
        setAuthAccessToken(state, action: { payload: string | null }) {
            state.authAccessToken = action.payload;
        },

        setAuthUser(state, action: { payload: IUser | null }) {
            state.authUser = action.payload;
        },
        updateDefaultDomain(state, action: { payload: TDomain[] }) {
            state.defaultDomains = action.payload;
        },
        updateManualDomain(state, action: { payload: TManualDomain[] }) {
            state.manualDomains = action.payload;
        },
        resetAuthInfo: () => initialState
    }
});

export const { setAuthAccessToken, updateDefaultDomain, updateManualDomain, setAuthUser, resetAuthInfo } = AuthSlice.actions;

export default AuthSlice.reducer;
