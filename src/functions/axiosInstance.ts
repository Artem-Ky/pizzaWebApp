import axios from "axios";
import { IUser } from "../types";




export const Fetch = axios.create({
    baseURL: 'https://localhost:7136/',
    headers: {
        Accept: 'application/json'
    }
});


export const getFetch = Fetch.get;

export const postFetch = Fetch.post;

export const putFetch = Fetch.put;

export const deleteFetch = Fetch.delete;

export const loginAPI = async (phone: string, password: string) => {
    try {
        const data = await postFetch<IUser>('api/account/login', {
            username: phone,
            password: password
        });
        return data;
    } catch (error) {
        return error;
    }
}