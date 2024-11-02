import { createBrowserRouter } from "react-router-dom"
import Error from "../Pages/Error"
import MainLayout from "../Layouts/MainLayout"

const routes = createBrowserRouter([
  {
    path : "/",
    element: <MainLayout />,
    errorElement: <Error />
  }
])

export default routes 