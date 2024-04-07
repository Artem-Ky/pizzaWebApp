import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBannerType } from "../../types";




export const CRUD_API = createApi({
    reducerPath: 'CRUD_API',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7136/api/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['bannerType'],
    endpoints: (builder) => ({
        fetchAllBannerTypes: builder.query<IBannerType[], void>({
            query: () => ({
                url: `BannerType`
            }),
            providesTags: ['bannerType']
        }),
        createBannerType: builder.mutation<IBannerType, IBannerType>({
            query: (bannerType) => ({
                url: `BannerType`,
                method: 'POST',
                body: bannerType
            }),
            invalidatesTags: ['bannerType']
        }),
        updateBannerType: builder.mutation<IBannerType, IBannerType>({
            query: (bannerType) => ({
                url: `BannerType/${bannerType.id}`,
                method: 'PUT',
                body: bannerType
            }),
            invalidatesTags: ['bannerType']
        }),
        deleteBannerType: builder.mutation<void, number>({
            query: (id) => ({
                url: `BannerType/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['bannerType']
        }),
    })
})