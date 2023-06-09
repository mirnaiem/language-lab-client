import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageClass = () => {
 const [axiosSecure]=useAxiosSecure();
 const {data:classes, isLoading, refetch}=useQuery(['class'],async()=>{
  const res=await axiosSecure('/admin/classes')
  return res.data
 })
 if(isLoading){
  return <p>Loading...</p>
 }
 const handleApprove = (cls) => {
  axiosSecure.patch(`/classes/approve/${cls._id}`)
  
    .then((data) => {
      console.log(data);
      if (data.data.modifiedCount>0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${cls.className} has been approve`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};
 const handleDeny = (cls) => {
  axiosSecure.patch(`/classes/deny/${cls._id}`)
 
    .then((data) => {
      console.log(data);
      if (data.data.modifiedCount>0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${cls.className} has been deny`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};

 
 return (
  <div className='w-4/5 mx-auto'>
   <h3 className='my-20'>Here will show all the added class by Instructor</h3>
   <h2 className='text-2xl font-semibold uppercase'> Total Classes:{classes.length} </h2>
   <div className="overflow-x-auto">
    <table className="table w-full">
     {/* head */}
     <thead >
      <tr>
       <th>#</th>
       <th>Image</th>
       <th>Class Name</th>
       <th>Instructor Name</th>
       <th>Instructor Email</th>
       <th>Seats</th>
       <th>Price</th>
       <th>Status</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {classes?.map((cls, index) =>
       <tr key={cls._id}>
        <th>{index + 1}</th>
        <td><img className='w-20' src={cls.classImage} alt="" /></td>
        <td>{cls.className}</td>
        <td>{cls.instructorName}</td>
        <td>{cls.instructorEmail}</td>
        <td>{cls.seat}</td>
        <td>${cls.price}</td>
        <td>{cls.status?cls.status:'Pending'}</td>
        <td className='flex flex-col gap-2'>
         <button onClick={()=>handleApprove(cls)} className='btn '>Approve</button>
         <button onClick={()=>handleDeny(cls)} className='btn '>Deny</button>
         {cls.status==='Deny'&& <Link to='/dashboard/feedback'><button className='btn '>Feedback</button></Link>}
        </td>
    
       </tr>

      )}


     </tbody>
    </table>
   </div>
  </div>
 );
};

export default ManageClass;