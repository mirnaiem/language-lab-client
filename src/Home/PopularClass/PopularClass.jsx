import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularClassCard from './PopularClassCard';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';


const PopularClass = () => {

 const [axiosSecure]=useAxiosSecure();
 const {data:popularClasses,isLoading}=useQuery({
  queryKey:['popular'],
  queryFn:async()=>{
   const res=await axiosSecure('/classes/enroll')
   return res.data
  }
  })
  if(isLoading){
   return <p>Loading.....</p>
  }
 return (
  <div className='my-28'>
   <Slide direction='right'>
   <h2 className='text-center text-4xl md:text-5xl font-bold'>Popular Class</h2></Slide>
   <Slide>
   <div className='divider w-2/6 md:w-1/6  mx-auto'></div>
   </Slide>
   <div className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-10 my-10'>
    {
     popularClasses?.map(classInfo=><PopularClassCard key={classInfo._id} classInfo={classInfo} ></PopularClassCard>)
    }
   </div>

   <div className='text-center '><Link to='/classes'><button className='btn bg-cyan-700 text-white'>See All Class</button></Link></div>
  </div>
 );
};

export default PopularClass;