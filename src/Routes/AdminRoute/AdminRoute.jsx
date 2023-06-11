import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useAuthContext from '../../hooks/useAuthContext';


const AdminRoute = ({children}) => {
const {user,loading}=useAuthContext()
const [isAdmin,isAdminLoading]=useAdmin()
const location=useLocation()
if(loading || isAdminLoading){
return <h2>loading....</h2>
}
else if(user && isAdmin){
 return  children
}
console.log(isAdmin)

return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;