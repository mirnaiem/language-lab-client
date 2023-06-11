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
    <div className='w-4/5 mx-auto'>
      <h2 className='text-2xl font-semibold uppercase'> Total user:{users.length} </h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role?user.role:'Student'}</td>
                <td>
                  
                    <button
                    
                      onClick={() => handleAdminUpdate(user)}
                      className='btn py-2 rounded-xl w-26 bg-orange-500 text-center text-white'
                      disabled={user.role === 'Admin'}
                    >
                      Make Admin
                    </button>
                 
                </td>
                <td>
                  
                    <button
                    
                      onClick={() => handleInstructorUpdate(user)}
                      className='btn py-2 rounded-xl w-26 px-2 bg-orange-500 text-center text-white'
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
