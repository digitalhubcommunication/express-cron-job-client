import { createSlice } from "@reduxjs/toolkit";

interface TInitialState {
    authAccessToken: string | null;
    authRefreshToken: string | null;
}

//  initial state
const initialState: TInitialState = {
    authAccessToken: null,
    authRefreshToken: null,
};

// ==========  Create the slice with reducers for individual property changes ============
const AuthSlice = createSlice({
    name: "auth-info",
    initialState,
    reducers: {
        setAuthAccessToken(state, action: { payload: string | null }) {
            state.authAccessToken = action.payload;
        },
         resetAuthInfo: () => initialState
    }
});

export const { setAuthAccessToken, resetAuthInfo } = AuthSlice.actions;

export default AuthSlice.reducer;
