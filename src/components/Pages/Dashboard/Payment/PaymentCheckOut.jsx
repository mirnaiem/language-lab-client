import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuthContext from '../../../../hooks/useAuthContext';

const PaymentCheckOut = ({classInfo}) => {
 const { classImage, className, _id, instructorName, price, seat } = classInfo;

const {user}=useAuthContext()
 const [cardError,setCardError]=useState('')
 const [clientSecret,setClientSecret]=useState('')
 const [processing,setProcessing]=useState(false);
 const [transaction,setTransaction]=useState('')

 const stripe=useStripe()
 const elements=useElements()
const [axiosSecure]=useAxiosSecure()

if(price>0){

}

 useEffect(()=>{
axiosSecure.post('/payment-intent',{price})
.then(data=>{
 console.log(data.data);
 setClientSecret(data.data.clientSecret)
})
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
 const {error, paymentMethod} = await stripe.createPaymentMethod({
  type: 'card',
  card,
});
if(error){
console.log('error',error)
setCardError(error)
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
 console.log(68,confirmError)
}
setProcessing(false)

if(paymentIntent.status=== "succeeded"
  ){
    setTransaction(paymentIntent.id)
    const transaction=paymentIntent.id;}
}
 return (
 <>
   <form onSubmit={handleSubmit}>
      <CardElement
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
    <p className='text-red-500 mt-4'>{cardError.message}</p>
   {transaction && <p className='text-green-500 mt-4'>Transaction complete with transaction id: {transaction}</p>}
  </>
 );
};

export default PaymentCheckOut;