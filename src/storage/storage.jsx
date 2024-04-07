import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";
import { userSlice } from "./features/userSlice";
import authSlice from "./features/authSlice";
import { apiColombiaSlice } from "./features/apiColombia";

const storage = configureStore({
    reducer: {
        number: numberReducer,
        users: userSlice,
        auth: authSlice,
        [userSlice.reducerPath]: userSlice.reducer,
        [apiColombiaSlice.reducerPath]: apiColombiaSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(userSlice.middleware).concat(apiColombiaSlice.middleware)
})

export default storage;