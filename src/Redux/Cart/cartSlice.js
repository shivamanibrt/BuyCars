import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartOpen: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.cartOpen = !state.cartOpen;
        },
    },
});

export const { toggleCart } = userSlice.actions;

export default userSlice.reducer;
