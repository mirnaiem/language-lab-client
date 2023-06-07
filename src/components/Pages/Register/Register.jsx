import React from 'react';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Register = () => {
 return (
  <div className="hero min-h-screen bg-base-200">
   
  <div className="hero-content flex-col  lg:flex-row lg:justify-between">
   <div className="text-center w-1/2 h-full  lg:text-left">
    <h1 className="text-5xl font-bold text-center mb-3">Sign Up!</h1>
    <img src="https://img.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147855147.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
   </div>
   <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
    <form className="card-body">
     <div className="form-control">
      <label className="label">
       <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="Name" className="input input-bordered" />
     </div>
     <div className="form-control">
      <label className="label">
       <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name='photo' placeholder="Photo" className="input input-bordered" />
     </div>
     <div className="form-control">
      <label className="label">
       <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" />
     </div>
     <div className="form-control">
      <label className="label">
       <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" />
      <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
     </div>
     <div className="form-control mt-6">
      <input disabled={false} type="submit" className="btn btn-primary" value="Login" />
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