import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuthContext from '../../../../hooks/useAuthContext';
import Swal from 'sweetalert2';

const PaymentCheckOut = ({classInfo}) => {
 const { classImage, className, _id, classId, instructorName, price, seat } = classInfo;
// console.log(classInfo);
const {user}=useAuthContext()
 const [cardError,setCardError]=useState('')
 const [clientSecret,setClientSecret]=useState('')
 const [processing,setProcessing]=useState(false);
 const [transaction,setTransaction]=useState('')

 const stripe=useStripe()
 const elements=useElements()
const [axiosSecure]=useAxiosSecure()



 useEffect(()=>{
if(price>0){
axiosSecure.post('/payment-intent',{price})
.then(data=>{
 console.log(data.data);
 setClientSecret(data.data.clientSecret)
})
}
 },[])

 const handleSubmit=async(event)=>{
  event.preventDefault()
if(!stripe || !elements){
 return
}

const card=elements.getElement(CardElement)
if(card===null){
 return
 }
 const {error,} = await stripe.createPaymentMethod({
  type: 'card',
  card,
});
if(error){
setCardError(error.message)
}
else {
 setCardError('')
}
setProcessing(true)

const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
 clientSecret,
 {
   payment_method: {
     card: card,
     billing_details: {
       name: user?.displayName ||'anonymous user',
       email: user?.email ||  'email unknown'
     },
   },
 },
);
if(confirmError){
 setCardError(confirmError.message);
}
setProcessing(false)

if(paymentIntent.status=== "succeeded"
  ){
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Payment Successful',
    showConfirmButton: false,
    timer: 1500
  })
   const transactionId=paymentIntent.id;
  setTransaction(transactionId)
    const payment={
     email:user?.email || 'unknown',
     classImage, 
     className, 
     instructorName, 
     price,
     transactionId,
     date:new Date()
    }

    axiosSecure.post('/payment',payment)
    .then(res=>{
     if(res.data.insertedId){
      axiosSecure.delete(`/selectclass/${_id}`)
      .then(res=>{
       if(res.data.deletedCount>0){
      axiosSecure.patch(`/classes/${classId}`)
      .then(res=>{

      })
       }
      })
     }
    })
  }
    
}
 return (
 <>
   <form onSubmit={handleSubmit}>
      <CardElement
      className='bg-white p-6 border border-gray-300'
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
   
      <button type="submit" className='btn  btn-primary btn-sm mt-4 ' disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {cardError && <p className='text-red-500 mt-4'>{cardError}</p>}
   {transaction && <p className='text-green-500 mt-4'>Transaction complete with transaction id: {transaction}</p>}
  </>
 );
};

export default PaymentCheckOut;