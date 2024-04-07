import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReduce from './slices/cartSlice/cartSlice'
import productReduce from './slices/productSlice'
import navigationReduce from './slices/navigateSlice'
import userReduce from './slices/userSlice'
import { CRUD_API } from "./RTKQuery/CRUD";





const rootReducer = combineReducers ({
    cart: cartReduce,
    product: productReduce,
    navigation: navigationReduce,
    user: userReduce,
    [CRUD_API.reducerPath]: CRUD_API.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CRUD_API.middleware),
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];