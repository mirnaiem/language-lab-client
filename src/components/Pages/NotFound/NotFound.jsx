import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
 
 return (
  <div className='relative min-h-screen flex flex-col justify-center items-center'>
  <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18756.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" className="mx-auto" />
  <h2 className='text-3xl font-bold absolute w-1/2 text-red-500 bottom-20 bg-slate-50'>404 Error: The page you're seeking has embarked on a cosmic journey beyond our reach!! <span className='text-xl text-blue-600'>Back to <Link className='font-bold' to='/'>Home</Link></span></h2>
 </div>
 );
};

export default NotFound;