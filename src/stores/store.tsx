import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReduce from './slices/cartSlice/cartSlice'
import userReduce from './slices/userSlice/userSlice'
import { ProductSlice } from "./RTKQuery/product";
import { orderSlice } from "./RTKQuery/cart";
import { navigateSlice } from "./RTKQuery/navigate";
import navigationReduce from "./slices/navigateSlice/navigateSlice";
import { AdminPanel } from "./RTKQuery/adminPanel";
import { userSlice } from "./RTKQuery/users";





const rootReducer = combineReducers ({
    cart: cartReduce,
    user: userReduce,
    navigation: navigationReduce,
    [AdminPanel.reducerPath]: AdminPanel.reducer,
    [ProductSlice.reducerPath]: ProductSlice.reducer,
    [navigateSlice.reducerPath]: navigateSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [orderSlice.reducerPath]: orderSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AdminPanel.middleware).concat(ProductSlice.middleware)
        .concat(navigateSlice.middleware).concat(userSlice.middleware).concat(orderSlice.middleware),
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];