import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useInstructor from '../../hooks/useInstructor';

const InstructorRoute = ({children}) => {
 const {user,loading}=useAuthContext()
 const [isInstructor,isInstructorLoading]=useInstructor()
 const location=useLocation()
 if(loading || isInstructorLoading){
 return <h2>loading....</h2>
 }
 else if(user && isInstructor){
  return  children
 }
 
 
 return <Navigate to='/' state={{from:location}} replace></Navigate>
 };

export default InstructorRoute;