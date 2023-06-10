import React from 'react';
import PaymentCheckOut from './PaymentCheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData} from 'react-router-dom';
const stripePromise=loadStripe(import.meta.env.VITE_Published_KEY)
const Payment = () => {
 
 const classInfo=useLoaderData();
 

 return (
  <div className='w-2/5'>
   <Elements stripe={stripePromise}>
   <PaymentCheckOut  classInfo={classInfo}></PaymentCheckOut>
   </Elements>
  </div>
 );
};

export default Payment;