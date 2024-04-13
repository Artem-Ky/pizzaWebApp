import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import Cookies from 'universal-cookie';
import { ITokenResponse } from "../types";
import { SetAuth, SetRoles, logOut } from "./slices/userSlice/userSlice";
import { store } from "../main";
import { Mutex } from 'async-mutex'

const mutex = new Mutex()
export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:7136/api/',
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    const token = localStorage.getItem('token');

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});





export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions);

  //если с бека пришла 401
  if (result.error && result.error.status === 401) {
    
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        //обновляем токен
        const cookies = new Cookies();
        const refreshTokenCookie = cookies.get("refresh");
        const refreshResult = await baseQuery(
          {
            url: "account/refresh",
            method: "POST",
            body: { refreshToken: refreshTokenCookie },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          const tokenData = refreshResult.data as ITokenResponse;
          localStorage.setItem("token", tokenData.token);
          cookies.set("refresh", tokenData.refreshToken, {
            path: "/",
            maxAge: 365 * 24 * 60 * 60,
          });
          const isAuth = store.getState().user.isAuth;
          if (!isAuth) {
            const tokenParts = tokenData.token.split(".");
            const tokenPayload = JSON.parse(atob(tokenParts[1]));
            const roles =
              tokenPayload[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ];
            api.dispatch(SetAuth(true));
            api.dispatch(SetRoles(roles));
          }
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
          api.dispatch(SetAuth(false));
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default baseQueryWithReauth;