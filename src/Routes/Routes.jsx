import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home"
import Error from "../Pages/Error"

const routes = createBrowserRouter([
  {
    path : "/",
    element: <Home />,
    errorElement: <Error />
  }
])

export default routes 