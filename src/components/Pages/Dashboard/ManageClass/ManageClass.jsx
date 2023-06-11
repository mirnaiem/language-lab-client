import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes, isLoading, refetch } = useQuery(['class'], async () => {
    const res = await axiosSecure('/admin/classes')
    return res.data
  })
  if (isLoading) {
    return <p>Loading...</p>
  }
  const handleApprove = (cls) => {
    axiosSecure.patch(`/classes/approve/${cls._id}`)

      .then((data) => {

        if (data.data.modifiedCount > 0) {
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
        if (data.data.modifiedCount > 0) {
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

    <div className='w-full mx-auto'>

      <div className='bg-[#e0effe] h-64 flex items-center justify-center '>
        <h2 className='  uppercase font-bold text-5xl '>All added <span className='text-[#f0604d] hover:text-black ml-2'>Class</span></h2>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table w-[95%] mx-auto">
          {/* head */}
          <thead className=' bg-[#2d3f53]'>
            <tr className='text-2xl text-white'>
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
              <tr key={cls._id} className='font-medium text-xl'>
                <th>{index + 1}</th>
                <td><img className='w-24 h-24 rounded-lg' src={cls.classImage} alt="" /></td>
                <td>{cls.className}</td>
                <td>{cls.instructorName}</td>
                <td>{cls.instructorEmail}</td>
                <td>{cls.seat}</td>
                <td>${cls.price}</td>
                <td>{cls.status ? cls.status : 'Pending'}</td>
                <td className='flex flex-col gap-2'>
                  <button onClick={() => handleApprove(cls)} disabled={cls.status === 'Deny' || cls.status === 'Approve'} className='btn btn-primary btn-sm'>Approve</button>
                  <button onClick={() => handleDeny(cls)} disabled={cls.status === 'Deny' || cls.status === 'Approve'} className='btn btn-primary btn-sm'>Deny</button>
                  {cls.status && <Link to={`/dashboard/feedback/${cls._id}`}><button className='btn btn-sm btn-warning text-white'>Feedback</button></Link>}
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