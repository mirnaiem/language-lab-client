import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
const imageToken=import.meta.env.VITE_Image_Token
const AddClass = () => {
 const {user}=useAuthContext()
 const [axiosSecure]=useAxiosSecure()
 const imageHostingUrl=`https://api.imgbb.com/1/upload?key=${imageToken} `
 const { register, reset, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data => {
  const className=data.name;
  const photo=data.picture;
  const email=data.email;
  const instructorName=data.instructorName;
  const price=data.price;
  const seat=data.seat;
 
  
 
  const formData=new FormData();
  formData.append('image',photo[0])

  fetch(imageHostingUrl,{
   method:'POST',
   body:formData
  })
  .then(res=>res.json())
  .then(imgData=>{

  if(imgData.success){
   const image=imgData.data.display_url;
   const saveClass={className,classImage:image,instructorEmail:email, instructorImage:user?.photoURL, instructorName,price:parseFloat(price),seat:parseInt(seat)};
   
   axiosSecure.post('/classes',saveClass)
   .then(data=>{
    if(data.data.insertedId){
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
  })
   



 }
 return (
  <div className='w-full'>
    <div className='bg-[#e0effe] h-64 flex items-center justify-center '>
        <h2 className='  uppercase font-bold text-5xl '>Add your<span className='text-[#f0604d] hover:text-black ml-2'>Class</span></h2>
      </div>
   <form onSubmit={handleSubmit(onSubmit)}  className='w-full mt-32'>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} placeholder='name of the class' className="input " />
          
        </div>
      
       <div className="">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input type="file" {...register("picture", { required: true })} placeholder="photo"className="file-input w-full max-w-xs"  />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input type="text" {...register("instructorName", { required: true })} defaultValue={user?.displayName}  className="input " />
          
        </div>
       </div>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          {/* {defaultValue:user?.email}, */}
          <input type="email" {...register("email", { required: true })} defaultValue={user?.email}   className="input " />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input type="number" {...register("seat", { required: true })}  placeholder='available seat' className="input " />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" {...register("price", { required: true })}  placeholder='price' className="input " />
          
        </div>
       </div>
   
        <div className="form-control w-2/5 mx-auto mt-6">
          
          <input className="btn bg-[#194164] hover:bg-[#486177] border-0 btn-block text-white" type="submit" value="Add Class" />
        </div>
      </form>
  </div>
 );
};

export default AddClass;