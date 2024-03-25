import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuFetchData, ProductState, LoadStatus, NavBarStatus } from "../../types"
import { getFetch } from "../../functions/axiosInstance";
import {  AxiosError  } from "axios";



const initialState: ProductState = {
    items: [],
    status: LoadStatus.default,
    navBarStatus: NavBarStatus.isClose
};

  export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      setItems: (state, action: PayloadAction<MenuFetchData[]>) => {
        state.items = action.payload;
      },
      setIsNavPopUpMenuLinksOpen: (state, action: PayloadAction<NavBarStatus>) => {
        state.navBarStatus = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(getMenuList.pending, (state) => {
        state.status = LoadStatus.isLoading
      })
      .addCase(getMenuList.fulfilled, (state, action) => {
        state.status = LoadStatus.success
        state.items = action.payload
      })
      .addCase(getMenuList.rejected, (state) => {
        state.status = LoadStatus.reject;
      })
    }
  });




  export const getMenuList = createAsyncThunk(
    'product/getMenuList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getFetch.get('api/DefaultProducts/MenuList');
            return response.data;
          } catch (error) {
            const axiosError = error as AxiosError; 
            return rejectWithValue(axiosError.response?.data || 'неизвестная ошибка');
        }
    }
);











export const { setItems, setIsNavPopUpMenuLinksOpen } = productSlice.actions;

export default productSlice.reducer;