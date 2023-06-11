import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClass = () => {
 const {user}=useAuthContext();
 const [axiosSecure]=useAxiosSecure();
 const {data:classes,isLoading}=useQuery({
 queryKey:['classes',user?.email],
 queryFn:async()=>{
  const res=await axiosSecure(`/instructor/classes/${user?.email}`)
  return res.data
 }
 })
 if(isLoading){
  return <p>Loading.....</p>
 }
 
 return (
<div className='w-full mx-auto'>
<div className='bg-[#e0effe] h-64 flex items-center justify-center '>
        <h2 className='  uppercase font-bold text-5xl '>Manage All<span className='text-[#f0604d] hover:text-black ml-2'>user</span></h2>
      </div>
   
   <div className="overflow-x-auto w-[95%] mx-auto mt-16">
      <h2 className='text-2xl font-semibold uppercase'> Total Classes: {classes.length} </h2>
    <table className="table ">
     {/* head */}
     <thead className=' bg-[#2d3f53]'>
            <tr className='text-2xl text-white'>
       <th>#</th>
       <th>Class Name</th>
       <th>Status</th>
       <th>Enroll</th>
       <th>Feedback</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {classes?.map((cls, index) =>
       <tr key={cls._id} className='font-medium text-xl'>
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