import React from 'react';

const PopularInsCard = ({instructor}) => {
 const {instructorImage,totalEnrollment,instructorName}=instructor;
 return (
  <div>
   <div className="card card-compact relative    w-full bg-base-100 shadow-xl">
  <figure><img className='w-full h-96 rounded-xl' src={instructorImage?instructorImage:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=sph"} alt="Shoes" /></figure>
<div className='absolute bottom-2 left-4'>
 <h1 className='text-xl'>Name: <span className='text-[#484a46] font-bold'>{instructorName}</span></h1>
<h2 className=' text-xl '>Students: <span className='text-[#ef5743] font-bold'> {totalEnrollment}</span></h2>
</div>
</div>
 </div>
 );
};

export default PopularInsCard;