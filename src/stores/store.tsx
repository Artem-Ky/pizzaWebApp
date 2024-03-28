import { configureStore } from "@reduxjs/toolkit";
import cartReduce from './slices/cartSlice'
import productReduce from './slices/productSlice'
import globalReduce from './slices/globalSlice'




export const store = configureStore (
    {
        reducer: {
            cart: cartReduce,
            product: productReduce,
            global: globalReduce
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;