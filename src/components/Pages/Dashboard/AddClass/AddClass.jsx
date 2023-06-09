import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddClass = () => {
 const {user}=useAuthContext()
 const [axiosSecure]=useAxiosSecure()
 const { register, reset, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data => {
  const className=data.name;
  const photo=data.picture;
  const email=data.email;
  const instructorName=data.instructorName;
  const price=data.price;
  const seat=data.seat;
  const saveClass={className,classImage:photo,instructorEmail:email, instructorName,price,seat};
  console.log(saveClass);
   fetch('http://localhost:3000/classes',{
    method:'POST',
    headers:{
     'content-type': 'application/json'
    },
    body:JSON.stringify(saveClass)
   })
  .then(res=>res.json())
  .then(data=>{
   if(data.insertedId){
    Swal.fire({
     position: 'top-end',
     icon: 'success',
     title: 'User has been created successfully',
     showConfirmButton: false,
     timer: 1500
   })
   reset()
   }
  })


 }
 return (
  <div className='w-full'>
   <form onSubmit={handleSubmit(onSubmit)}  className='w-full'>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} placeholder='name of the class' className="input input-bordered" />
          
        </div>
      
       <div className="">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input type="file" {...register("picture", { required: true })} placeholder="photo"className="file-input file-input-bordered w-full max-w-xs"  />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input type="text" {...register("instructorName", { required: true })} defaultValue={user?.displayName}  className="input input-bordered" />
          
        </div>
       </div>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          {/* {defaultValue:user?.email}, */}
          <input type="email" {...register("email", { required: true })} defaultValue={user?.email}   className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input type="number" {...register("seat", { required: true })}  placeholder='available seat' className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" {...register("price", { required: true })}  placeholder='price' className="input input-bordered" />
          
        </div>
       </div>
   
        <div className="form-control w-4/5 mx-auto mt-6">
          
          <input className="btn bg-cyan-600 border-0 btn-block" type="submit" value="Add Class" />
        </div>
      </form>
  </div>
 );
};

export default AddClass;