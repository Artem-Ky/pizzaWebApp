import Footer from "../../Components/Footer/Footer"
import Navigation from "../../Components/Navigation/Navigation"
import Header from "../../Components/header/Header"
import { Outlet } from "react-router-dom"

const UsersSharedLayout = () => {
  return (
    <>      

    <Header/>
    <main>
      <Navigation/>
      <Outlet/>
    </main>
    <Footer/>
  </>
  )
}

export default UsersSharedLayout