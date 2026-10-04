import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";


let Routes = createBrowserRouter([
    {
      path:'/',
      element:<App></App>,
      children:[
        {
            index:true,
            element:<Home></Home>
        }
      ]
    }
])

export default Routes;