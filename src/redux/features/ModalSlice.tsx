import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalSliceState {
    modalPay: boolean
    modalPassed : boolean
}

const initialState: ModalSliceState = {
    modalPay : false,
    modalPassed : false
}


const ModalSlice = createSlice({
    name: 'ModalToggle',
    initialState: initialState,
    reducers: {
        modalPayToggle(state, action) {
            state.modalPay = action.payload
        },
        modalPassedToggle(state, action) {
            state.modalPassed = action.payload
        },
    }
})




export const {modalPayToggle, modalPassedToggle } = ModalSlice.actions


export default ModalSlice.reducer