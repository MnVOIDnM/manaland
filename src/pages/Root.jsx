import { Navigate, Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Navigate to="home" />
      <Footer />
      </div>
  )
}

export default Root