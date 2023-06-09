import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard';

const Classes = () => {
 const [axiosSecure]=useAxiosSecure()
 const {data:classes, isLoading, refetch}=useQuery(['class'],async()=>{
  const res=await axiosSecure('/classes')
  return res.data
 })
 if(isLoading){
  return <p className='text-center mt-10'>Loading......</p>
 }
 return (
  <div>
   
   <h2 className='bg-[#fff1e7] h-64 flex justify-center items-center uppercase font-bold text-5xl '>List Of <span className='text-[#f0604d] hover:text-black ml-2'>Class</span></h2>

   <div className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-10 my-24'>
    {
     classes?.map(classInfo=><ClassCard key={classInfo._id} classInfo={classInfo}></ClassCard>)
    }
   </div>
  
  </div>
 );
};

export default Classes;