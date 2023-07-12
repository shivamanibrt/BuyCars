import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    car: [],
    selectedCar: []
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCar: (state, action) => {
            // if (!state.car.length && !payload.length) return;
            state.car = action.payload
        },
        setSelectedCar: (state, action) => {
            state.selectedCar = action.payload
        },
    }
})

const { reducer, actions } = carSlice;
export const { setCar, setSelectedCar } = actions;
export default reducer;
