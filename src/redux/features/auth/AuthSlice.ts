import { IUser } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export interface TInitialState {
    authUser: IUser | null;
    isUserLoading: boolean;
}

//  initial state
const initialState: TInitialState = {
    authUser: null,
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
        setUserDataLoading(state, action: { payload: boolean }) {
            state.isUserLoading = action.payload;
        },
        resetAuthInfo: () => initialState
    }
});

export const { setAuthUser, resetAuthInfo, setUserDataLoading } = AuthSlice.actions;

export default AuthSlice.reducer;
