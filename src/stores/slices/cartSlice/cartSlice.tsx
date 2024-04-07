import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "../../../types"



const initialState: ICartState = {
    amount: 0,
    totalPrice: 0
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<number>) => {
            state.amount += 1;
            state.totalPrice += action.payload;
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.amount -= 1;
            state.totalPrice -= action.payload;
        },
    }
})



export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;