import React from 'react';
import { Link } from 'react-router-dom';

const EnrollClassCard = ({enroll}) => {
 const {classImage,className,price,instructorName}=enroll
 return (
  <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className=' w-80 h-64' src={classImage} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">CLass Name: <span className='text-3xl'>{className}</span></h2>
    <h2 className="card-title">Instructor Name: <span className='text-2xl'>{instructorName}</span></h2>
    <p className='font-semibold'>Price: <span className='text-[#da9842] font-bold text-xl'>${price}</span></p>
    <div className="card-actions justify-end">
     <Link to='/dashboard/paymenthistory'> <button className="btn text-white bg-[#f0604d]">View Details</button> </Link>
    </div>
  </div>
</div>
 );
};

export default EnrollClassCard;