import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReduce from './slices/cartSlice'
import productReduce from './slices/productSlice'
import navigationReduce from './slices/navigateSlice'
import userReduce from './slices/userSlice'
import adminReduce from './slices/bannerTypeSlice'





const rootReducer = combineReducers ({
    cart: cartReduce,
    product: productReduce,
    navigation: navigationReduce,
    user: userReduce,
    admin: adminReduce
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];