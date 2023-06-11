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
import Feedback from "../components/Pages/Feedback/Feedback";
import Payment from "../components/Pages/Dashboard/Payment/Payment";
import PaymentHisTory from "../components/Pages/Dashboard/PaymentHisTory/PaymentHisTory";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import InstructorRoute from "./InstructorRoute.jsx/InstructorRoute";
import StudentRoute from "./StudentRoute/StudentRoute";
import NotFound from "../components/Pages/NotFound/NotFound";
 
const token=localStorage.getItem('token')
const router = createBrowserRouter([
  {
    
    path:'*',
    element:<NotFound></NotFound>
   
},
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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[

      // Student dashboard
      {
        path:'myselectedclass',
        element:<StudentRoute><MySelectClass></MySelectClass></StudentRoute>
      },
      {
        path:'myenrollclass',
        element:<StudentRoute><MyEnrollClass></MyEnrollClass></StudentRoute>
      },
      
      {
        path:"payment/:id",
        element:<StudentRoute><Payment></Payment></StudentRoute>,
        loader:({params})=>fetch(`http://localhost:3000/selectedclass/${params.id}`,{
          headers:{
            authorization:`bearer ${token}`
          }
        })

      },
      {
        path:'paymenthistory',
        element:<StudentRoute><PaymentHisTory></PaymentHisTory></StudentRoute>
      },

      // Instructor dashboard

      {
        path:'myclass',
        element:<InstructorRoute><MyClass></MyClass></InstructorRoute>
      },
      {
        path:'addclass',
        element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
 
    // admin dashboard

      {
        path:'manageclass',
        element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
      },
      {
        path:'manageuser',
        element:<AdminRoute><ManagerUser></ManagerUser></AdminRoute>
      },
      {
        path:'feedback/:id',
        element:<AdminRoute><Feedback></Feedback></AdminRoute>,
       
      },
 
      

     

    ]
  }
 
]);
export default router;