import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";
import { userSlice } from "./features/userSlice";
import authSlice from "./features/authSlice";

const storage = configureStore({
    reducer: {
        number: numberReducer,
        users: userSlice,
        auth: authSlice,
        [userSlice.reducerPath]: userSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(userSlice.middleware)
})

export default storage;