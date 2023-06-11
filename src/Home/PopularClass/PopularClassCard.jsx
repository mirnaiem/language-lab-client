import React from 'react';

const PopularClassCard = ({classInfo}) => {
 const {classImage,enroll}=classInfo
 return (
 <div>
   <div className="card card-compact relative  duration-300   w-full bg-base-100 shadow-xl">
  <figure><img className='w-full h-96 rounded-xl' src={classImage} alt="Shoes" /></figure>
  <h2 className='absolute top-4 left-4 text-xl font-bold'>Enroll Students: <span className='text-[#ef5743]'> {enroll}</span></h2>
</div>
 </div>
 );
};
// hover:scale-105
export default PopularClassCard;