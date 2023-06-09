import React from 'react';
const ClassCard = ({classInfo}) => {
 const {classImage,className,instructorName,price,seat}=classInfo
 console.log(classInfo);
 return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full' src={classInfo.classImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{className}</h2>
    <h2 className="text-xl">Instructor Name: {instructorName}</h2>
    <p>Price: ${price}</p>
    <p>Available Seat: {seat}</p>
    <div className="card-actions ">
      <button className="btn text-white bg-[#ef5743]">select</button>
    </div>
  </div>
</div>
 );
};

export default ClassCard;