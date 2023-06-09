import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Dashboard = () => {

  const [isAdmin]=useAdmin()
  const [isInstructor]=useInstructor()
// const isInstructor=false
// const isAdmin=true;

 return (
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-blue-400">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full text-white">
      {isAdmin? <> <li><Link to='manageclass'>Manage Class</Link></li>
      <li><Link to='manageuser'>Manage User</Link></li></>  
      :
      isInstructor?<> <li><Link to='myclass'>Add A Class</Link></li>
      <li><Link to='addclass'>My  Classes</Link></li></>
      :
      <><li><Link to='myselectedclass'>My Selected Class</Link></li>
      <li><Link to='myenrollclass'>My Enroll Class</Link></li></>}

      <div className='divider'></div>
      <li><Link to='/'>Home</Link></li>
    </ul>
  
  </div>
</div>
 );
};

export default Dashboard;
      
      