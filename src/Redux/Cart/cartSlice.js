import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});


const { reducer, actions } = cartSlice;
export const { setCart } = actions;
export default reducer;