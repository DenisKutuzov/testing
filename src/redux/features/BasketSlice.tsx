import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItemType} from "./types"


const initialState: CartItemType[] = []

export const BasketSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addItem(state, action: PayloadAction<CartItemType>) {
                state.push(action.payload)
            },
            removeItem(state, action: PayloadAction<{ id: number }>) {
                return state.filter(i => i.id !== action.payload.id)
            },
            removeAllItem(state) {
                return state = initialState
            }

        }
    }
)

export const {addItem, removeItem, removeAllItem} = BasketSlice.actions


export default BasketSlice.reducer