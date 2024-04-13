import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMenuFetchData} from "../../types";




export const ProductSlice = createApi({
    reducerPath: 'Product',
    baseQuery: fetchBaseQuery ({
        baseUrl: 'https://localhost:7136/api/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            const token = localStorage.getItem('token');
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        fetchAllMainMenu: builder.query<IMenuFetchData[], void>({
            query: () => ({
                url: 'DefaultProducts/MenuList'
            }),
            providesTags: ['Product']
        })
    })
})