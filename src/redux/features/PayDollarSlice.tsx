import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState : number = 50


const PayDollarSlice = createSlice({
    name: 'dollar',
    initialState: initialState,
    reducers: {
        changeSumDollars(state, action) {
            return state = action.payload
        }
    }
})



export const {changeSumDollars } = PayDollarSlice.actions


export default PayDollarSlice.reducer