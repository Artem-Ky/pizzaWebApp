import { createApi } from "@reduxjs/toolkit/query/react";
import { IBannerType } from "../../types";
import {baseQueryWithReauth} from "../baseQueryWithReauth"



export const AdminPanel = createApi({
    reducerPath: 'AdminPanel',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['bannerType'],
    endpoints: (builder) => ({
        fetchAllBannerTypes: builder.query<IBannerType[], void>({
            query: () => ({
                url: `BannerType/`
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