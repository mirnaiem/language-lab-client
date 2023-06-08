import React, { useContext, useState } from 'react';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
const Register = () => {
  const [error, setError] = useState('')
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    const name = data.name;
    const email = data.email;
    const photo = data.photo;
    const password = data.password;

    createUser(email, password)
      .then(result => {

        const createdUser = result.user;
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo
        })
          // .then(() => {

          //   const saveUser = { name, email };
          //   fetch('http://localhost:3000/users', {
          //     method: 'POST',
          //     headers: {
          //       'content-type': 'application/json'
          //     },
          //     body: JSON.stringify(saveUser)
          //   })

          //     .then(res => res.json())
          //     .then(data => {
          //       console.log(data)
          //       if (data.insertedId) {
          //         Swal.fire({
          //           position: 'top-end',
          //           icon: 'success',
          //           title: 'User has been created successfully',
          //           showConfirmButton: false,
          //           timer: 1500
          //         })
          //         setError('')
          //         reset()
          //         navigate('/')
          //       }
          //     })

          // })
          .then(() => {
            const saveUSer={name, email}
            fetch('http://localhost:3000/users',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(saveUSer)
            })
              .then(res => res.json())
              .then(info => {
                if (info.insertedId) {
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User has been created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
                  reset()
                }
              })
          })
        console.log(createdUser)
      })
      .catch(err => setError(err.message))


  };

  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="hero-content flex-col  lg:flex-row lg:justify-between">
        <div className="text-center w-1/2 h-full  lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-3">Sign Up!</h1>
          <img src="https://img.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147855147.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
              {errors.name && <span className='text-red-500'>Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" {...register("photo", { required: true })} placeholder="Photo" className="input input-bordered" />
              {errors.photo && <span className='text-red-500'>Photo Url is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span className='text-red-500'>Email is required</span>}
              <p className='text-red-500'>{error}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])/ })} placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
              {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be six characters</span>}
              {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must be one uppercase one lowercase one special characters and one number </span>}

            </div>
            <div className="form-control mt-6">
              <input disabled={false} type="submit" className="btn btn-primary" value="Register" />
            </div>
          </form>
          <div className="divider mt-0">OR</div>
          <SocialLogin></SocialLogin>
          <p className='text-center pb-3'>Already Have an Account? Please, <Link className='text-blue-500' to='/login'>Login.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;