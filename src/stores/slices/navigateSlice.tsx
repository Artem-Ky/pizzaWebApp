import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnchorLinks, LoadStatus, navigationSliceProps, NavBarStatus } from "../../types";
import { getFetch } from "../../functions/axiosInstance";
import {  AxiosError  } from "axios";



const initialState: navigationSliceProps = {
    navigationLinks: [],
    status: LoadStatus.default,
    navBarStatus: NavBarStatus.isClose
}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setLinks: (state, action: PayloadAction<AnchorLinks[]>) => {
            state.navigationLinks = action.payload;
        },
        setIsNavPopUpMenuLinksOpen: (state, action: PayloadAction<NavBarStatus>) => {
          state.navBarStatus = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAnchorNavLinks.pending, (state) => {
        })
        .addCase(getAnchorNavLinks.fulfilled, (state, action) => {
          state.navigationLinks = action.payload
        })
        .addCase(getAnchorNavLinks.rejected, (state) => {
        })
    }
})

export const getAnchorNavLinks = createAsyncThunk(
    'navigation/getLinkList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getFetch.get('api/ProductType');
            return response.data;
          } catch (error) {
            const axiosError = error as AxiosError; 
            return rejectWithValue(axiosError.response?.data || 'неизвестная ошибка');
        }
    }
)

export const {setLinks, setIsNavPopUpMenuLinksOpen} = navigationSlice.actions;
export default navigationSlice.reducer;