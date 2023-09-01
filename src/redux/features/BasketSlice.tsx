'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CartItemType, CartSliceState} from "./types"

type CounterState = {
    value: number;
};

// const {totalPrice} = getCartFromLS()

const initialState : any = {
    items: [],
    totalPrice: 0
}

export const CartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addItem(state, action: PayloadAction<CartItemType>) {
                // @ts-ignore
                const findItem = state.items.find((item) => item.id === action.payload.id)

                console.log(action.payload)
                if (findItem) {
                    findItem.count++
                } else {
                    state.items.push({
                        ...action.payload,
                        count: 1
                    })
                }

                // @ts-ignore
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.count) + sum
                }, 0)
            },
            // removeItem(state, action) {
            //     state.items = state.items.filter(item => item.id !== action.payload)
            //
            //     state.totalPrice = state.items.reduce((sum, obj) => {
            //         return (obj.price * obj.count) + sum
            //     }, 0)
            // },
            // itemMinus(state, action) {
            //     const findItem = state.items.find(item => item.id === action.payload)
            //
            //     if (findItem) {
            //         findItem.count--
            //     }
            //
            //     state.totalPrice = calcTotalPrice(state.items)
            // },
            // clearCart(state) {
            //     state.items = []
            //     state.totalPrice = 0
            // }
        }
    }
)

export const {addItem} = CartSlice.actions

export const selectCart = (state) => state.cart
export const selectCartItemById = (id: string) => (state) => state.cart.items.find((item) => item.id === id)

export default CartSlice.reducer