import {
 createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Classes from "../components/Pages/Class/Classes";
import Instructors from "../components/Pages/Instructor/Instructors";
import Dashboard from "../Layout/Main/Dashboard";
import MySelectClass from "../components/Pages/Dashboard/MySelectClass/MySelectClass";
import MyEnrollClass from "../components/Pages/Dashboard/MyEnrollClass/MyEnrollClass";

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
     },
     {
      path:'classes',
      element:<Classes></Classes>
     },
     {
      path:'instructors',
      element:<Instructors></Instructors>
     }
      
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'myselectedclass',
        element:<MySelectClass></MySelectClass>
      },
      {
        path:'myenrollclass',
        element:<MyEnrollClass></MyEnrollClass>
      }
    ]
  }
 
]);
export default router;