import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const PopularInsCard = ({instructor}) => {
 const {instructorImage,totalEnrollment,instructorName}=instructor;
 return (
 <Zoom>
   <div>
   <div className="card card-compact relative    w-full bg-base-100 shadow-xl">
  <figure><img className='w-full h-96 rounded-xl' src={instructorImage?instructorImage:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=sph"} alt="Shoes" /></figure>
<div className='absolute bottom-2 left-4'>
 <h1 className='text-xl text-[#f9ba28ec]'>Name: <span className='text-[#f94728ec] font-bold'>{instructorName}</span></h1>
<h2 className=' text-xl text-[#f9ba28ec]'>Students: <span className='text-[#ef5743] font-bold'> {totalEnrollment}</span></h2>
</div>
</div>
 </div>
 </Zoom>
 );
};

export default PopularInsCard;