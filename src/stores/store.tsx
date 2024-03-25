import { configureStore } from "@reduxjs/toolkit";
import cartReduce from './slices/cartSlice'
import productReduce from './slices/productSlice'




export const store = configureStore (
    {
        reducer: {
            cart: cartReduce,
            product: productReduce,
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;