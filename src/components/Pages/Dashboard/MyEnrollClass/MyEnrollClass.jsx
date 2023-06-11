import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import EnrollClassCard from './EnrollClassCard';

const MyEnrollClass = () => {
 const {user}=useAuthContext();
 const [axiosSecure]=useAxiosSecure();
 const {data:enrolled,isLoading}=useQuery({
  queryKey:['enroll',user?.email],
  queryFn:async()=>{
   const res=await axiosSecure(`/payment/${user?.email}`)
   return res.data
  }
  })
  if(isLoading){
   return <p>Loading.....</p>
  }
 return (
  <div className='w-full'>
    <div className='bg-[#fff1e7] h-64 flex items-center justify-center '>
  <h2 className='  uppercase font-bold text-5xl '>MY Enrolled<span className='text-[#f0604d] hover:text-black ml-2'>CLass</span></h2>
  </div>
  <div className='w-4/5 ms-8 flex flex-col gap-16 mt-16'>
   {enrolled.length? enrolled.map(enroll=><EnrollClassCard key={enroll._id} enroll={enroll}> </EnrollClassCard>):<h1 className='text-3xl text-center text-red-300'> NO Class Found </h1>}
  </div>
  </div>
 );
};

export default MyEnrollClass;