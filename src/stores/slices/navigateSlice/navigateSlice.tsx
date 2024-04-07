import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  INavigationSlice, NavBarStatus } from "../../../types";


const initialState: INavigationSlice = {
    navBarStatus: NavBarStatus.isClose
}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setIsNavPopUpMenuLinksOpen: (state, action: PayloadAction<NavBarStatus>) => {
          state.navBarStatus = action.payload;
        }
    }
})



export const {setIsNavPopUpMenuLinksOpen} = navigationSlice.actions;
export default navigationSlice.reducer;