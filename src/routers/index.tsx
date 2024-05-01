import {  Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import RegisterForm from "../pages/Register/RegisterForm";
import NotFound from "../pages/NotFound/NotFound";
import UsersSharedLayout from "../pages/Shared/UsersSharedLayout";
import LoginForm from "../pages/LoginForm/LoginForm";
import BannerType from "../pages/Admin/SubPages/bannerType/BannerType";
import Profile from "../pages/Profile/Profile";
import RequireAuth from "../pages/Shared/RequireAuth";
import Cart from "../pages/Cart/Cart";


const RouterPages = () => {


    return (
        <Routes>
              <Route path="/" element={<UsersSharedLayout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="register" element={<RegisterForm/>}/>
                  <Route path="login" element={<LoginForm/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Route>
              <Route path="/" element={<RequireAuth allowRoles={["User", "Admin"]}/>}>
                  <Route path="profile" element={<Profile/>}/>
                  <Route path="cart" element={<Cart/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Route>
              <Route path="/admin" element={<RequireAuth allowRoles={["Admin"]}/>}>
                  <Route index element={<BannerType/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Route>
        </Routes>
    )
}

export default RouterPages