import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types"



const initialState: IUser = {
    phone:'',
    token: ''
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
        }
    }
})


export const {SetUser, SetPhone} = userSlice.actions;

export default userSlice.reducer