import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManagerUser = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:3000/users');
    return res.json();
  });

  const handleAdminUpdate = (user) => {
    fetch(`http://localhost:3000/users/admin/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
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
    fetch(`http://localhost:3000/users/instructor/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
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
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role?user.role:'Student'}</td>
                <td>
                  
                    <button
                    
                      onClick={() => handleAdminUpdate(user)}
                      className='btn py-2 rounded-xl w-26 bg-orange-500 text-center text-white'
                      disabled={user.role === 'Admin' || user.role === 'Instructor'}
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