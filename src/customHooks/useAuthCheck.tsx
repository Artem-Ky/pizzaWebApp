import { useEffect } from "react";
import { useAppDispatch } from "./redux/redux";
import { SetAuth, SetRoles } from "../stores/slices/userSlice/userSlice";
import Cookies from 'universal-cookie';
 
 

 const useAuthCheck = () => {
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      const fetchData = () => {
        const token = localStorage.getItem('token');
        const cookies = new Cookies();
        const refreshTokenCookie = cookies.get('refresh');
        
        if (!refreshTokenCookie && !token) {
          dispatch(SetAuth(false));
          return;
        }
        else if (refreshTokenCookie && !token)
        {
          cookies.remove('refresh')
          dispatch(SetAuth(false));
          return;
        }
        else if (!refreshTokenCookie && token) {
          localStorage.removeItem('token');
          dispatch(SetAuth(false));
          return;
        } 
        else {
            try {
                const tokenParts = token?.split(".") as string[];
                const tokenPayload = JSON.parse(atob(tokenParts[1]));

                const roles =
                    tokenPayload[
                    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
                    ];
                dispatch(SetAuth(true));
                dispatch(SetRoles(roles));
                return;
            }
            catch (e) {
                localStorage.removeItem("token");
                dispatch(SetAuth(false));
            }
        }
    }
  
      fetchData();
    }, []);
    return true;
 }
 
 export default useAuthCheck