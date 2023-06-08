import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManagerUser = () => {
 const {data:users=[], refetch}=useQuery(['users'],async()=>{
  const res=await fetch('http://localhost:3000/users');
  return res.json()
 })

 return (
  <div>
   <h2>manage user : {users.length}</h2>
  </div>
 );
};

export default ManagerUser;