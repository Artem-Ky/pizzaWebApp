import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin, IRegister, ITokenResponse, IUser } from "../../types";




export const userSlice = createApi ({
    reducerPath: 'UserAPI',
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
        credentials: 'include'
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<IUser, ILogin> ({
            query: (user) => ({
                url: 'account/login',
                method: 'POST',
                body: user
            }),
            
        }),
        registerUser: builder.mutation<IUser, IRegister> ({
            query: (user) => ({
                url: 'account/register',
                method: 'POST',
                body: user
            }),
            
        }),
        refreshUser: builder.mutation<ITokenResponse, { refreshToken: string }> ({
            query: ({ refreshToken }) => ({
                url: 'account/refresh',
                method: 'POST',
                body: { refreshToken }
            }),
        })
        
    })
})
