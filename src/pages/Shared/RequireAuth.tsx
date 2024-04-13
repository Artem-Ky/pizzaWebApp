import { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../customHooks/redux/redux";
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/header/Header";
import Footer from "../../Components/Footer/Footer";
import useAuthCheck from "../../customHooks/useAuthCheck";

const RequireAuth = ({ allowRoles }: { allowRoles: string[] }) => {
    useAuthCheck();
    const location = useLocation();
    const [authChecked, setAuthChecked] = useState(false); 
    const isAuth = useAppSelector(state => state.user.isAuth); 
    const roles = useAppSelector(state => state.user.roles); 

    useEffect(() => {
        setAuthChecked(true);
    }, []);

    if (!authChecked) {
        return <div>Loading...</div>;
    }

    return isAuth && roles.find(role => allowRoles?.includes(role)) ? (
      <>
        <Header />
        <main>
          <Navigation />
          <Outlet />
        </main>
        <Footer />
      </>
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
