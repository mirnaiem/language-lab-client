import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHisTory = () => {
 const {user}=useAuthContext();
 const [axiosSecure]=useAxiosSecure();
 const {data:histories,isLoading}=useQuery({
  queryKey:['history',user?.email],
  queryFn:async()=>{
   const res=await axiosSecure(`/payment/${user?.email}`)
   return res.data
  }
  })
  if(isLoading){
   return <p>Loading.....</p>
  }
 return (
  <div className='w-full mt-0'>
    <div className='bg-[#fff1e7] h-64 flex items-center justify-center '>
  <h2 className='  uppercase font-bold text-5xl '>your payment<span className='text-[#f0604d] hover:text-black ml-2'>history</span></h2>
  </div>
  <div className='overflow-x-auto mt-6'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr className='text-2xl bg-red-100'>
              <th>#</th>
              <th>CLass Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {histories?.map((history, index) => (
              <tr key={history._id} className='font-bold text-xl'>
                <th>{index + 1}</th>
                <td>{history.className}</td>
                <td>{history.email}</td>
                <td className='text-[#da9842] fon'>${history.price}</td>
                <td>{history.date}</td>
                <td className='text-indigo-700'>{history.transactionId}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
 );
};

export default PaymentHisTory;