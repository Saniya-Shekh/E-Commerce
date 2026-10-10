import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import Products from "./Pages/Products";



let Routes = createBrowserRouter([
    {
      path:'/',
      element:<App></App>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:'/products',
          element:<Products></Products>
        }, 
        
      ]
    }
])

export default Routes;