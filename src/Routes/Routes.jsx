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
import MyClass from "../components/Pages/Dashboard/MyClass/MyClass";
import AddClass from "../components/Pages/Dashboard/AddClass/AddClass";
import ManageClass from "../components/Pages/Dashboard/ManageClass/ManageClass";
import ManagerUser from "../components/Pages/Dashboard/ManageUser/ManagerUser";

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
  // dashboard
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
      },
      {
        path:'myclass',
        element:<MyClass></MyClass>
      },
      {
        path:'addclass',
        element:<AddClass></AddClass>
      },
      {
        path:'manageclass',
        element:<ManageClass></ManageClass>
      },
      {
        path:'manageuser',
        element:<ManagerUser></ManagerUser>
      }

    ]
  }
 
]);
export default router;