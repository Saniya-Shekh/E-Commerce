import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import Products from "./Pages/Products";
import productsData from "./data/ProductsData";
import About from "./Pages/About";



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
          element:<Products data={productsData}></Products>
        }, 
        {
          path: '/about',
          element:<About></About>
        }
        
        
      ]
    }
])

export default Routes;