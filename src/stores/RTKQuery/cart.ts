import { createApi } from "@reduxjs/toolkit/query/react";
import { IOrder } from "../../types";
import baseQueryWithReauth from "../baseQueryWithReauth";




export const orderSlice = createApi ({
    reducerPath: 'Order',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        createOrder: builder.mutation<void, IOrder>({
            query: (order) => ({
              url: 'order/create',
              method: 'POST',
              body: order
            }),
          })
        
    })
})
