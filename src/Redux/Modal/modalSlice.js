import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modalShow: false
}

const modalSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setShowModal: (state, action) => {
            state.modalShow = action.payload
        }
    }
})

const { reducer, actions } = modalSlice;
export const { setShowModal } = actions
export default reducer;

