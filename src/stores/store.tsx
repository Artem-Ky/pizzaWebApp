import { configureStore } from "@reduxjs/toolkit";
import cartReduce from './slices/cartSlice'
import productReduce from './slices/productSlice'
import navigationReduce from './slices/navigateSlice'




export const store = configureStore (
    {
        reducer: {
            cart: cartReduce,
            product: productReduce,
            navigation: navigationReduce
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;