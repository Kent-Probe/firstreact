import { createSlice } from "@reduxjs/toolkit"
import { decodeToken } from "../../utils/decodeToken";

const initialState = {
    token: null,
    isAuthenticated: false,
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSucces: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.user = decodeToken(action.payload.token);
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        }
    }
})

export const { loginSucces, logout } = authSlice.actions;
export default authSlice.reducer;