import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux/userSlice";
import carReducer from "./Redux/Car/carSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        car: carReducer,
    },
});
