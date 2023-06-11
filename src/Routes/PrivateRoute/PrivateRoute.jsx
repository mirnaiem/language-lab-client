import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

const PrivateRoute = ({children}) => {
const {user,loading}=useAuthContext()
const location=useLocation()
if(loading){
return <h2>loading....</h2>
}
else if(user){
 return children
}
 return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;