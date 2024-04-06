import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteFetch, getFetch, postFetch, putFetch } from "../../functions/axiosInstance";
import { IBannerType } from "../../types";
import { AxiosError } from "axios";


export const getBannerTypes = createAsyncThunk(
    'bannerTypes/getBannerTypes',
    async (_, {rejectWithValue}) => {
        try {
            const response = await getFetch<IBannerType[]>('api/BannerType');
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError;
            return rejectWithValue(axiosError.response?.data || 'ошибка при получении типов банера')
        }
    }
)
export const setBannerTypes = createAsyncThunk(
    'bannerTypes/setBannerTypes',
    async (bannerType: IBannerType, {rejectWithValue}) => {
        try {
            const response = await postFetch('api/BannerType', bannerType);
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError;
            return rejectWithValue(axiosError.response?.data || 'ошибка при добавлении')
        }
    }
)
export const putBannerTypes = createAsyncThunk(
    'bannerTypes/putBannerTypes',
    async (bannerType: IBannerType, {rejectWithValue}) => {
        try {
            const response = await putFetch(`api/BannerType/${bannerType.id}`, bannerType);
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError;
            return rejectWithValue(axiosError.response?.data || 'ошибка при изменении')
        }
    }
)
export const deleteBannerTypes = createAsyncThunk(
    'bannerTypes/deleteBannerTypes',
    async (bannerType: number, {rejectWithValue}) => {
        try {
            const response = await deleteFetch(`api/BannerType/${bannerType}`);
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError;
            return rejectWithValue(axiosError.response?.data || 'ошибка при удалении')
        }
    }
)