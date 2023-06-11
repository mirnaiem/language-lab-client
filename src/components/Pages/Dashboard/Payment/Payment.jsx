import React from 'react';
import PaymentCheckOut from './PaymentCheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData} from 'react-router-dom';
const stripePromise=loadStripe(import.meta.env.VITE_Published_KEY)
const Payment = () => {
 
 const classInfo=useLoaderData();
 

 return (
  <div className='w-full'>
     <div className='bg-[#e0effe] h-64 flex items-center justify-center '>
  <h2 className='  uppercase font-bold text-5xl '>Proceed Your<span className='text-[#f0604d] hover:text-black ml-2'>Payment</span></h2>
  </div>
  <div className='w-2/5 mx-auto mt-32'>

   <Elements stripe={stripePromise}>
   <PaymentCheckOut  classInfo={classInfo}></PaymentCheckOut>
   </Elements>
  </div></div>
 );
};

export default Payment;