import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import { useForm } from 'react-hook-form';

const AddClass = () => {
 const {user}=useAuthContext()
 const { register, reset, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data => {
console.log(data)
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
      
       <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input type="text" {...register("picture", { required: true })} placeholder="photo" className="input input-bordered" />
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
          <input type="number" {...register("seat", { required: true })} defaultValue={'$'} placeholder='available seat' className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" {...register("price", { required: true })} defaultValue={'$'} placeholder='price' className="input input-bordered" />
          
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