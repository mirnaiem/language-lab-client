import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SelectedClassCard from './SelectedClassCard';

const MySelectClass = () => {
 const {user}=useAuthContext();
 const [axiosSecure]=useAxiosSecure();
 const {data:classes,isLoading,refetch}=useQuery({
 queryKey:['classes',user?.email],
 queryFn:async()=>{
  const res=await axiosSecure(`/selectclass/${user?.email}`)
  return res.data
 }
 })
 if(isLoading){
  return <p>Loading.....</p>
 }
 
 return (
  <div className='w-full'>
   
  <div className='bg-[#e0effe] h-64 flex items-center justify-center '>
  <h2 className='  uppercase font-bold text-5xl '>List Of <span className='text-[#f0604d] hover:text-black ml-2'>Class</span></h2>
  </div>

  
   {classes.length? <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-24 mx-3'>
    {classes?.map(classInfo=><SelectedClassCard refetch={refetch} key={classInfo._id} classInfo={classInfo}></SelectedClassCard>)}</div> 
    : <h1 className='text-3xl mt-10 text-center text-red-300'> NO Class Found </h1>
}
  
 
 </div>
 );
};

export default MySelectClass;