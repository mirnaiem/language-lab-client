import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const Navbar = () => {
const {user,logOut}=useContext(AuthContext)
const [isAdmin]=useAdmin()
const [isInstructor]=useInstructor()
const handleLogOut=()=>{
  logOut().then(()=>{})
}

 const menuOptions=<>
 <li><Link to="/">Home</Link></li>
 <li><Link to='/instructors'>Instructors</Link></li>
 <li><Link to='/classes'>Classes</Link></li>
{user && <li><Link to={`/dashboard/${isAdmin?'manageclass':isInstructor?'myclass':'myselectedclass'}`}>Dashboard</Link></li>}
 </>

 return (
<div className='bg-base-100 sticky shadow-lg top-0 z-10'>
<div className="navbar w-full  md:w-4/5 mx-auto ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-semibold w-52">
       {menuOptions}
      </ul>
    </div>
<img className='rounded-full w-[20%]' src="https://i.ibb.co/YtGcM00/Language-Lab-1.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-xl">
    {menuOptions}
    </ul>
  </div>
  <div className="navbar-end">
    
    {user? <>
    <img title={user?.displayName} className='w-[40px] rounded-full me-3' src={user?.photoURL} alt="" />
    <button onClick={handleLogOut} className="btn bg-[#ef5743] text-white hover:text-black">LogOut</button></> :
    <Link to='/login'><button className="btn bg-[#ef5743] text-white hover:text-black">Login</button></Link>}
   
    
  </div>
</div>
</div>
 );
};

export default Navbar;