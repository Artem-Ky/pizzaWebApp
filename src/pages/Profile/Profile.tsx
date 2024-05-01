import { useAppDispatch } from "../../customHooks/redux/redux"
import { logOut } from "../../stores/slices/userSlice/userSlice";



const Profile = () => {
  const dispatch = useAppDispatch();
  return (
      <section className="container">
        <h2>тут будет профиль</h2>
        <button style={{width: 100, height: 30}} type="button" onClick={() => dispatch(logOut())}>logout</button>
      </section>
  )
}

export default Profile
