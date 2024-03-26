import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";
import { userSlice } from "./features/userSlice";

const storage = configureStore({
    reducer: {
        number: numberReducer,
        [userSlice.reducerPath]: userSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(userSlice.middleware)
})

export default storage;