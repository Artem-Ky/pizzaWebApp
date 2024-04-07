import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAnchorLinks } from "../../types";




export const navigateSlice = createApi({
    reducerPath: 'navigate',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7136/api/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ['menuNavigation'],
    endpoints: (builder) => ({
        fetchMenuNavLinks: builder.query<IAnchorLinks[], void>({
            query: () => ({
                url: 'ProductType'
            }),
            providesTags: ['menuNavigation']
        })
    })
})