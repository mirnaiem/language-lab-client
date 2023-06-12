import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularInsCard from './PopularInsCard';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const PopularInstructor = () => {
 const [axiosSecure]=useAxiosSecure();
 const {data:popularInstructor,isLoading}=useQuery({
  queryKey:['instructor'],
  queryFn:async()=>{
   const res=await axiosSecure('/classes/p-instructor')
   return res.data
  }
  })
  if(isLoading){
   return <p>Loading.....</p>
  }
 return (
  <div className='my-28'>
  <Slide>
  <h2 className='text-center text-4xl md:text-5xl font-bold'>Popular Instructor</h2>
  </Slide>
   <Slide direction='right'><div className='divider w-2/6 md:w-1/6  mx-auto'></div></Slide>
   <div className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-10 my-10'>
    {
     popularInstructor?.map((instructor,index)=><PopularInsCard key={index} instructor={instructor} ></PopularInsCard>)
    }
   </div>
   <div className='text-center '><Link to='/instructors'><button className='btn bg-cyan-700 text-white'>See All Instructor</button></Link></div>
  
  </div>
 );
};

export default PopularInstructor;