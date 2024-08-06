

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Error from "./pages/error"
import Home from "./pages/Home"



function App() {
  const router = createBrowserRouter([

    {
      path: "",
      element: <Dashboard />,
      errorElement:<Error/>,
      children:[
        {
          path: "home",
          element:<Home />,

        }

      ],
    },


  ])
  return (

    <RouterProvider router={router}/>
      
  )
  
}

export default App
