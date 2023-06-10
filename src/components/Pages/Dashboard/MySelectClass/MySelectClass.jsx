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
  <div>
   
  <h2 className='bg-[#fff1e7] h-64 flex justify-center items-center uppercase font-bold text-5xl '>List Of <span className='text-[#f0604d] hover:text-black ml-2'>Class</span></h2>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-24'>
   {
    classes?.map(classInfo=><SelectedClassCard refetch={refetch} key={classInfo._id} classInfo={classInfo}></SelectedClassCard>)
   }
  </div>
 
 </div>
 );
};

export default MySelectClass;