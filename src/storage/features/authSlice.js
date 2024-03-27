import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSucces: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        }
    }
})

export const { loginSucces, logout } = authSlice.actions;
export default authSlice.reducer;