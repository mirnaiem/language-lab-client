import {
 createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
     {
      path: "/",
      element:<Home></Home>
     },
     {
      path:'login',
      element:<Login></Login>
     },
     {
      path:'register',
      element:<Register></Register>
     }
      
    ]
  }
 
]);
export default router;