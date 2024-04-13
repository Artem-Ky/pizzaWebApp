import { useAppSelector } from "../../customHooks/redux/redux";


const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile

export const getAuth = () => {
  const isAuth = useAppSelector(state => state.user.isAuth);
  return (
    isAuth
  )
}