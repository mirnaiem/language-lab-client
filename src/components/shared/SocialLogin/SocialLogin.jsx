import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
   const {googleLogin}=useContext(AuthContext);
   const navigate=useNavigate();
 const handleGoogleLogin=()=>{
   googleLogin().then(result=>{
     const googleUser=result.user;
     navigate('/')
     console.log(googleUser);
   })
   
    }
 return (
<div className=' w-full text-center pb-3'>
   <button onClick={handleGoogleLogin} className='btn btn-outline w-4/5'>Login With Google</button>
  </div>
 );
};

export default SocialLogin;