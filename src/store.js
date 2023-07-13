import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./Redux/User/userSlice";
import carReducer from "./Redux/Car/carSlice";
import cartReducer from "./Redux/Cart/cartSlice";
import modalRedcer from "./Redux/Modal/modalSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    user: userReducer,
    car: carReducer,
    cart: cartReducer,
    modal: modalRedcer
}));

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
