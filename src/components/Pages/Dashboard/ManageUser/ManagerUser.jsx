import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManagerUser = () => {
  const [axiosSecure]=useAxiosSecure()
  const { data: users = [], refetch,isLoading } = useQuery(['users'], async () => {
    const res = await axiosSecure('/users');
    return res.data;
  });
  if(isLoading){
    return <p>Loading....</p>
  }

  const handleAdminUpdate = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      
      .then((data) => {
        console.log(data);
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} has been made an admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleInstructorUpdate = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`)
      
      .then((data) => {
        console.log(data);
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} has been made an instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className='w-full mx-auto'>
      <div className='bg-[#e0effe] h-64 flex items-center justify-center '>
        <h2 className='  uppercase font-bold text-5xl '>Manage All<span className='text-[#f0604d] hover:text-black ml-2'>user</span></h2>
      </div>
      
      <div className='overflow-x-auto w-[95%] mx-auto mt-16'>
        <h2 className='text-2xl font-semibold uppercase'> Total user:{users.length} </h2>
        <table className='table '>
          {/* head */}
          <thead className=' bg-[#2d3f53]'>
            <tr className='text-2xl text-white'>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className='text-center'>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id} className='font-medium text-xl'>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role?user.role:'Student'}</td>
                <td className='flex gap-2'>
                  
                    <button
                    
                      onClick={() => handleAdminUpdate(user)}
                      className='btn py-2 rounded-xl w-26 bg-orange-500 text-center text-white btn-sm'
                      disabled={user.role === 'Admin'}
                    >
                      Make Admin
                    </button>
                 <button
                    
                      onClick={() => handleInstructorUpdate(user)}
                      className='btn py-2 rounded-xl w-26 px-2 bg-orange-500 text-center text-white btn-sm'
                      disabled={user.role === 'Admin' || user.role === 'Instructor'}
                    >
                      Make Instructor
                    </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerUser;
