import { createSlice } from "@reduxjs/toolkit"
import { IBannerTypes, LoadStatus } from "../../types"
import { deleteBannerTypes, getBannerTypes, putBannerTypes, setBannerTypes } from "./ActionCreators";



const initialState: IBannerTypes = {
    status: LoadStatus.default,
    bannerTypes: []
    
}


export const bannerSlice = createSlice({
    name: 'bannerTypes',
    initialState,
    reducers: {
        },
        extraReducers: (builder) => {
        builder
        //getBannerType
        .addCase(getBannerTypes.pending, (state) => {
            state.status = LoadStatus.isLoading;
        })
        .addCase(getBannerTypes.fulfilled, (state, action) => {
            state.bannerTypes = action.payload;
            state.status = LoadStatus.success;
        })
        .addCase(getBannerTypes.rejected, (state) => {
            state.status = LoadStatus.reject
        })
        //setBannerType
        .addCase(setBannerTypes.pending, (state) => {
            state.status = LoadStatus.isLoading;
        })
        .addCase(setBannerTypes.fulfilled, (state, action) => {
            state.status = LoadStatus.success;
            state.bannerTypes = [...state.bannerTypes, action.payload];
            console.log(state.bannerTypes);
        })
        .addCase(setBannerTypes.rejected, (state) => {
            state.status = LoadStatus.reject
        })
        //putBannerType
        .addCase(putBannerTypes.pending, (state) => {
            state.status = LoadStatus.isLoading;
        })
        .addCase(putBannerTypes.fulfilled, (state, action) => {
            state.status = LoadStatus.success;
            const index = state.bannerTypes.findIndex(bannerType => bannerType.id === action.payload.id);
            if (index !== -1) {
                state.bannerTypes[index] = action.payload;
            }
        })
        .addCase(putBannerTypes.rejected, (state) => {
            state.status = LoadStatus.reject
        })
        //deleteBannerType
        .addCase(deleteBannerTypes.pending, (state) => {
            state.status = LoadStatus.isLoading;
        })
        .addCase(deleteBannerTypes.fulfilled, (state, action) => {
            state.status = LoadStatus.success;
            state.bannerTypes = state.bannerTypes.filter(bannerType => bannerType.id !== action.meta.arg);
        })
        .addCase(deleteBannerTypes.rejected, (state) => {
            state.status = LoadStatus.reject
        })
        }
    }
)






// export const {setBannerType} = adminSlice.actions;

 export default bannerSlice.reducer;