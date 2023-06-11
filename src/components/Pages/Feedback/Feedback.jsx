import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Feedback = () => {
const [axiosSecure]=useAxiosSecure();

// console.log(loadedData);
const loader=useParams()

const { register, reset, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => {
 const feedback={feedback:data.feedback}
axiosSecure.post(`/classes/feedback/${loader.id}`,feedback)
.then(data=>{
 if(data.data.modifiedCount>0){
  reset()
  Swal.fire({
   position: 'top-end',
   icon: 'success',
   title: 'Successfully sent Feedback',
   showConfirmButton: false,
   timer: 1500,
 });
 }
})
}


 return (
  
 
<div className='w-full'>
<div className='bg-[#e0effe] h-64 flex items-center justify-center '>
        <h2 className='  uppercase font-bold text-5xl '>Give a <span className='text-[#f0604d] hover:text-black ml-2'>feedback</span></h2>
      </div>
<form onSubmit={handleSubmit(onSubmit)} className='w-3/5 mt-28 bg-blue-500 p-5 rounded-lg mx-auto'>
   
   <label className="label">
     <span className="label-text text-white">Give a Feedback</span>
     
   </label>
   <textarea {...register("feedback", { required: true })} className="textarea textarea-bordered  w-full h-32" placeholder="message"></textarea>
   <input className="btn  bg-amber-500 text-white border-0 " type="submit" value="Send Feedback" />
    </form>
</div>
  

  
  
 );
};

export default Feedback;