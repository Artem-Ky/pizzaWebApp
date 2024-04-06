import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuFetchData, IProductState, LoadStatus } from "../../types"
import { getFetch } from "../../functions/axiosInstance";
import {  AxiosError  } from "axios";



const initialState: IProductState = {
    items: [],
    status: LoadStatus.default
};

  export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      setItems: (state, action: PayloadAction<IMenuFetchData[]>) => {
        state.items = action.payload;
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
            const response = await getFetch('api/DefaultProducts/MenuList');
            return response.data;
          } catch (error) {
            const axiosError = error as AxiosError; 
            return rejectWithValue(axiosError.response?.data || 'неизвестная ошибка');
        }
    }
);











export const { setItems } = productSlice.actions;

export default productSlice.reducer;