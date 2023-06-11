import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorCard from './InstructorCard';

const Instructors = () => {
 const [axiosSecure]=useAxiosSecure();
 const {data:instructors,isLoading}=useQuery({
  queryKey:['instructor'],
  queryFn:async()=>{
   const res=await axiosSecure('/users/instructor')
   return res.data
  }
  })
  if(isLoading){
   return <p>Loading.....</p>
  }
 return (
  <div>
   
   <h2 className='bg-[#fff1e7] h-64 flex justify-center items-center uppercase font-bold text-5xl '>List Of <span className='text-[#f0604d] hover:text-black ml-2'>Instructor</span></h2>

   <div className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-10 my-24'>
    {
     instructors?.map(instructor=><InstructorCard key={instructor._id} instructor={instructor} ></InstructorCard>)
    }
   </div>
  
  </div>
 );
};

export default Instructors;