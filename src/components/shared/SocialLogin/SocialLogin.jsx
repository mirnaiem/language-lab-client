import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
   const {googleLogin}=useContext(AuthContext);
   const navigate=useNavigate();
   const location=useLocation()
 const from=location.state?.from?.pathname || '/'
 const handleGoogleLogin=()=>{
   googleLogin().then(result=>{
     const googleUser=result.user;
     const saveUser={name:googleUser.displayName, email:googleUser.email}
     fetch(' https://assignment-12-server-topaz-one.vercel.app/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(saveUser)
    }).then(res=>res.json())
    .then(data=>{
      
        navigate(from,{replace:true})
      
    })
     
   })
   
    }
 return (
<div className=' w-full text-center pb-3'>
   <button onClick={handleGoogleLogin} className='btn btn-outline w-4/5'>Login With Google</button>
  </div>
 );
};

export default SocialLogin;