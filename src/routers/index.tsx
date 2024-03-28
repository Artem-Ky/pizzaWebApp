import {  Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import RegisterForm from "../pages/Register/RegisterForm";
import NotFound from "../pages/NotFound/NotFound";
import UsersSharedLayout from "../pages/Shared/UsersSharedLayout";
import LoginForm from "../pages/LoginForm/LoginForm";


const RouterPages = () => {
    return (
        <Routes>
              <Route path="/" element={<UsersSharedLayout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="register" element={<RegisterForm/>}/>
                  <Route path="login" element={<LoginForm/>}/>
                  <Route path="profile" element={<LoginForm/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Route>
        </Routes>
    )
}

export default RouterPages