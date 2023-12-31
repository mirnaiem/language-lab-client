import React, { useContext, useState } from 'react';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Login = () => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password'); 

  const onSubmit = data => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        setError('');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User login successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 relative  lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-3">Login Here!</h1>
          <img src="https://img.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147855147.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span className='text-red-500'>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />

            </div>
            <div className="form-control mt-6">
              <input disabled={false} type="submit" className="btn btn-primary" value="Login" />
            </div>
            <p className='text-red-500'>{error}</p>
          </form>
          {password && <button
            className="absolute end-10 top-44 focus:outline-none"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>}
          <div className="divider mt-0">OR</div>
          <SocialLogin></SocialLogin>
          <p className='text-center pb-3'>Don't Have an Account? Please, <Link className='text-blue-500' to='/register'>Register.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
