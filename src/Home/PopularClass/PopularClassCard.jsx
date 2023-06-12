import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const PopularClassCard = ({classInfo}) => {
 const {classImage,enroll,className}=classInfo
 return (

 <Zoom>
  
   <div className="card w-96 bg-base-100 h-[400px] shadow-xl">
  <figure><img className='w-full h-64 rounded-xl' src={classImage} alt="Shoes" /></figure>
 <div className='card-body '>
  <h2 className='absolute top-4 left-4 text-xl text-white font-bold'>Enroll Students: <span className='text-[#f76b14]'> {enroll}</span></h2>
  <h2 className='font-bold text-xl'>{className}</h2>
 </div>
</div>

 </Zoom>
 );
};
// hover:scale-105
export default PopularClassCard;