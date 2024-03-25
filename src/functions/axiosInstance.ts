import axios from "axios";




export const getFetch = axios.create({
    baseURL: 'https://localhost:7136/',
    headers: {
        Accept: 'application/json'
    }
});