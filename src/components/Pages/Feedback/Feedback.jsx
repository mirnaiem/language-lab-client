import React from 'react';

const Feedback = () => {
 return (
  
 
<div className='w-full'>
 <h2 className='text-center text-4xl text-orange-500 mb-10 font-semibold'>Please Give a Feedback !</h2>
<form className='w-3/5 bg-blue-500 p-5 rounded-lg mx-auto'>
   
   <label className="label">
     <span className="label-text text-white">Give a Feedback</span>
     
   </label>
   <textarea className="textarea textarea-bordered  w-full h-32" placeholder="message"></textarea>
    </form>
</div>
  

  
  
 );
};

export default Feedback;