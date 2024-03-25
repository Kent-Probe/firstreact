import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";

const storage = configureStore({
    reducer: {
        number: numberReducer
    }
})

export default storage;