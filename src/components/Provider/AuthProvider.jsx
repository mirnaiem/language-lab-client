import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import axios from 'axios';

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const googleProvider=new GoogleAuthProvider()
 const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
 }

 const loginUser=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
 }

 const googleLogin=()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider);
 }
 
const logOut=()=>{
 return signOut(auth);
}

 useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth,currentUser=>{
  setUser(currentUser)

  // jwt
  if(currentUser){
   axios.post(' https://assignment-12-server-topaz-one.vercel.app/jwt',{
    email:currentUser.email
   })
   .then(data=>{
    localStorage.setItem('token',data.data.token)
    setLoading(false)
   })
  }
  else{
   localStorage.removeItem('token')
  }
 })
 return ()=>{
  return unsubscribe()
 }
 },[])

 const authInfo={
  user,
 loading,
 createUser,
 loginUser,
 googleLogin,
 logOut
 }

 return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
 );
};

export default AuthProvider;