import { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/redux";
import { SetAuth, SetRoles } from "../stores/slices/userSlice/userSlice";
import { userSlice } from '../stores/RTKQuery/users';
import Cookies from 'universal-cookie';
import { Mutex } from 'async-mutex';

 
 
//вызывает гонку состояний !!!

const useAuthCheckWithReAuth = () => {



  const dispatch = useAppDispatch();
  const [refreshUser, {}] = userSlice.useRefreshUserMutation();

  useEffect(() => {
    const fetchData = async () => {
      const tokenPreCheck = localStorage.getItem('token');
      const cookies = new Cookies();
      const refreshTokenCookie = cookies.get('refresh');
      
      if (!refreshTokenCookie && !tokenPreCheck) {
        return;
      }
      else if (!refreshTokenCookie && tokenPreCheck) {
        localStorage.removeItem('token');
        return;
      } 
      else {
        const token = localStorage.getItem('token');
        if (token) {
          const tokenParts = token?.split('.') as string[];
          const tokenPayload = JSON.parse(atob(tokenParts[1]));
          const tokenExpiration = tokenPayload.exp * 1000;
          const currentTime = Date.now();
          const isTokenValid = currentTime < tokenExpiration;
          
          if (isTokenValid) {
            const roles = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            dispatch(SetAuth(true));
            dispatch(SetRoles(roles));
            return;
          } else {
            try {
              const data = await refreshUser({refreshToken: refreshTokenCookie}).unwrap();
              localStorage.setItem('token', data.token);
              cookies.set('refresh', data.refreshToken, { path: '/', maxAge: 365 * 24 * 60 * 60});
            } catch (error) {
              console.error('Error refreshing token:', error);
            }
            return;
          }
        } else {
          try {
            const data = await refreshUser({refreshToken: refreshTokenCookie}).unwrap();
            localStorage.setItem('token', data.token);
            cookies.set('refresh', data.refreshToken, { path: '/', maxAge: 365 * 24 * 60 * 60});
          } catch (error) {
            console.error('Error refreshing token:', error);
          }
          return;
        }
      }
    };

    fetchData();
  }, []);
}


 

  export default useAuthCheckWithReAuth


