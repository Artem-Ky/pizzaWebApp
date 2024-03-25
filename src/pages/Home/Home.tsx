import Footer from "../../Components/Footer/Footer"
import Navigation from "../../Components/Navigation/Navigation"
import Header from "../../Components/header/Header"
import ProductBlog from "./Components/ProductContent"


const Home = () => {


  return (
    <>      
    <Header/>
    <main>
      <Navigation/>
      <ProductBlog/>
    </main>
    <Footer/>
    </>
  )
}

export default Home