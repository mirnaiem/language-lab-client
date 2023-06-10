import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const SelectedClassCard = ({classInfo,refetch}) => {
 const { classImage, className, _id, instructorName, price, seat } = classInfo;
 const [axiosSecure]=useAxiosSecure()
 const handleDelete=(id)=>{
  Swal.fire({
   title: 'Are you sure?',
   text: "You won't be able to revert this!",
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'Yes, delete it!'
 }).then((result) => {
   
   if (result.isConfirmed) {
    axiosSecure.delete(`/selectclass/${id}`)
    .then(data=>{
     if(data.data.deletedCount>0){
      refetch()
       Swal.fire(
       'Deleted!',
       'Your class item has been deleted.',
       'success'
     )
     }
    })
    
   }
 })
 }
 return (
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img className="w-full h-64" src={classImage} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{className}</h2>
    <h2 className="text-xl">Instructor Name: {instructorName}</h2>
    <p>Price: ${price}</p>
    <p>Available Seat: {seat}</p>
    <div className="card-actions justify-between ">
      
        <button className="btn text-white bg-[#efbe43]" > Pay </button>
        <button onClick={()=>handleDelete(_id)} className='btn text-white bg-[#ef5743]'>Delete</button>
    </div>
  </div>
</div>
 );
};

export default SelectedClassCard;