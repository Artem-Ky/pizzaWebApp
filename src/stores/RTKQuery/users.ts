import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin, IUser } from "../../types";




export const userSlice = createApi ({
    reducerPath: 'UserAPI',
    baseQuery: fetchBaseQuery ({
        baseUrl: 'https://localhost:7136/api/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<IUser, ILogin> ({
            query: (user) => ({
                url: 'account/login',
                method: 'POST',
                body: user
            }),
            
        })
    })
})
