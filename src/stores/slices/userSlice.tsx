import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, LoadStatus } from "../../types"
import { AxiosError } from "axios";
import { postFetch } from "../../functions/axiosInstance";



const initialState: IUser = {
    phone:'',
    password:'',
    token: '',
    status: LoadStatus.default
}




export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        SetUser: (state, action: PayloadAction<IUser>) => {
            state = action.payload;
        },
        SetPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.status = LoadStatus.isLoading
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.status = LoadStatus.success;
            console.log(state.token);
        })
        .addCase(loginUser.rejected, (state) => {
            state.status = LoadStatus.reject;
        })
    }
})



export const loginUser = createAsyncThunk (
    'user/loginUser',
    async (loginData: { phone: string; password: string}, {rejectWithValue}) => {
        try {
            console.log(loginData);
            const response = await postFetch('api/account/login', loginData);
            console.log(response)
            return { token: response.data.token };
        } catch (error) {
            const axiosError = error as AxiosError;
            return rejectWithValue(axiosError.response?.data || 'ошибка авторизации')
        }
    }
)

export const {SetUser, SetPhone} = userSlice.actions;

export default userSlice.reducer