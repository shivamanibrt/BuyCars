import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    car: {},
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCar: (state, action) => {
            state.car = action.payload
        },
    }
})

const { reducer, actions } = carSlice;
export const { setCar } = actions;
export default reducer;