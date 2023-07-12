import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.setCart = action.payload;
        },
    },
});


const { reducer, actions } = cartSlice;
export const { setCart } = actions;
export default reducer;