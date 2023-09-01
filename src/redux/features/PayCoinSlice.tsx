import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: number = 100


const PayCoinSlice = createSlice({
    name: 'coin',
    initialState: initialState,
    reducers: {
        changeSumCoin(state, action) {
            return state = action.payload
        },
    }
})




export const {changeSumCoin } = PayCoinSlice.actions


export default PayCoinSlice.reducer