

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Error from "./pages/error"
import Home from "./pages/Home"
import AboutPage from "./pages/about"
import ProjectsPage from "./pages/Projects"



function App() {
  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Dashboard />,
      errorElement:<Error/>,
      children:[
        {
          path: "Home",
          element:<Home />,

        },
        {
          path: "About-Me",
          element:<AboutPage />,

        },
        {
          path: "My-Projects",
          element:<ProjectsPage />,

        },

      ],
    },


  ])
  return (

    <RouterProvider router={router}/>
      
  )
  
}

export default App
