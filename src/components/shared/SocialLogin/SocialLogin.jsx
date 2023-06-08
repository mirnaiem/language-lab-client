import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
   const {googleLogin}=useContext(AuthContext);
   const navigate=useNavigate();
 const handleGoogleLogin=()=>{
   googleLogin().then(result=>{
     const googleUser=result.user;
     const saveUser={name:googleUser.displayName, email:googleUser.email}
     fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(saveUser)
    }).then(res=>res.json())
    .then(data=>{
      
        navigate('/')
      
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