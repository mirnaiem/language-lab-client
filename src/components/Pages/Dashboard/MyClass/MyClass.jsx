import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClass = () => {
 const {user}=useAuthContext();
 const [axiosSecure]=useAxiosSecure();
 const {data:classes, refetch,isLoading}=useQuery({
 queryKey:['classes',user?.email],
 queryFn:async()=>{
  const res=await axiosSecure(`classes/instructor/${user?.email}`)
  return res.data
 }
 })
 if(isLoading){
  return <p>Loading.....</p>
 }
 console.log(classes);
 return (
<div className='w-4/5 mx-auto'>
   <h2 className='text-2xl font-semibold uppercase'> Total Classes:{classes.length} </h2>
   <div className="overflow-x-auto">
    <table className="table w-full">
     {/* head */}
     <thead >
      <tr>
       <th>#</th>
       <th>Class Name</th>
       <th>Status</th>
       <th>Enroll</th>
       <th>Feedback</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {classes.map((cls, index) =>
       <tr key={cls._id}>
        <th>{index + 1}</th>
        <td>{cls.className}</td>
        <td>{cls.status?cls.status:'Pending'}</td>
        <td>{cls.enroll?cls.enroll:0}</td>
        <td>{cls.feedback?cls.feedback:'No feedback yet'}</td>
        <td><button className='btn '>Update</button></td>
    
       </tr>

      )}


     </tbody>
    </table>
   </div>
  </div>
 );
};

export default MyClass;