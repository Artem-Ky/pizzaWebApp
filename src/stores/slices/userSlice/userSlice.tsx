import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  IUser } from "../../../types"
import Cookies from 'universal-cookie';


const initialState: IUser = {
    phone:'',
    token: '',
    refreshToken: '',
    roles: [],
    isAuth: false
}




export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        SetUser: (state, action: PayloadAction<IUser>) => {
            state = action.payload;
            console.log(state);
        },
        SetPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        SetAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        SetRoles: (state, action: PayloadAction<string[]>) => {
            state.roles = action.payload;
            console.log(state.roles);
        },
        logOut: (state) => {
            state.isAuth = false;
            state.phone = '';
            state.refreshToken = '';
            state.roles = [];
            state.token = '';
            const cookies = new Cookies();
            localStorage.removeItem('token');
            cookies.remove('refresh');
        }
    }
})


export const {SetUser, SetPhone, SetAuth, logOut, SetRoles} = userSlice.actions;

export default userSlice.reducer