

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Error from "./pages/error"


function App() {
  const router = createBrowserRouter([

    {
      path: "",
      element: <Dashboard />,
      errorElement:<Error/>,
      children:[
        {
          path: "home",
          element:<div></div>,

        }

      ],
    },


  ])
  return (

    <RouterProvider router={router}/>
      
  )
  
}

export default App
