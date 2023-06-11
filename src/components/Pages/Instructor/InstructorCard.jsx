import React from 'react';

const InstructorCard = ({instructor}) => {
 const {photo,name,email}=instructor
 return (
 
   <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-64" src={photo} alt="instructor photo" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold">Instructor Name: <span className='font-medium text-2xl'>{name}</span></h2>
        <p className='font-bold'>Email: <span className='font-medium'>{email}</span></p>
        <button className='btn text-white mt-3 bg-[#ef5743]'>Show More</button>
      </div>
    </div>
  
        
 );
};

export default InstructorCard;