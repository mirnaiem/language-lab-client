import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

const StudentRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  const [axiosSecure] = useAxiosSecure();
  const { data: users, isLoading: isStudentLoading } = useQuery(['users'], async () => {
    const res = await axiosSecure(`/user/${user?.email}`);
    return res.data;
  });
console.log(users);
  if (isStudentLoading || loading) {
    return <p>Loading....</p>;
  } else if (user && !users.role) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default StudentRoute;
