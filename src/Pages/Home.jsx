import { Outlet } from "react-router"
import Footer from "../Components/Footer/Footer"
import Navber from "../Components/Navber/Navber"


function Home() {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home
