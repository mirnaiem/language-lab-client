import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useAuthContext from '../../hooks/useAuthContext';
import { FaChalkboardTeacher, FaCheckCircle, FaFolderPlus, FaHistory, FaHome, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
const {user}=useAuthContext()
  const [isAdmin]=useAdmin()

  const [isInstructor]=useInstructor()
 
// const isInstructor=false
// const isAdmin=true;

 return (
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-[#f2f4f6] flex flex-col items-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#194164]">
    
    
    <ul className="menu p-4 w-80 h-full text-xl text-white">
    <div className='flex flex-col gap-4 items-center mb-10'>
      <img className='w-2/5 h-[103px] rounded-full' src={user?.photoURL} alt="" />
      <div><h2 className='text-2xl text-center font-bold'>{user?.displayName}</h2>
      <p className='text-center'>{user?.email}</p></div>
    </div> 
    <div className="divider"></div>
      {isAdmin? <> <li><Link to='manageclass'><FaChalkboardTeacher size={30} className='me-4'></FaChalkboardTeacher>Manage Class</Link></li>
      <li><Link to='manageuser'><FaUsers size={30} className='me-4'></FaUsers>Manage User</Link></li></>  
      :
      isInstructor?<> <li><Link to='addclass'><FaFolderPlus size={30} className='me-4'></FaFolderPlus>Add A Class</Link></li>
      <li><Link to='myclass'><FaChalkboardTeacher size={30} className='me-4'></FaChalkboardTeacher>My  Classes</Link></li></>
      :
      <><li><Link to='myselectedclass'><FaChalkboardTeacher size={30} className='me-4'></FaChalkboardTeacher>My Selected Class</Link></li>
      <li><Link to='myenrollclass'><FaCheckCircle size={25} className='me-4'></FaCheckCircle>My Enroll Class</Link></li>
      <li><Link to='paymenthistory'><FaHistory size={25} className='me-4'></FaHistory>Payment History</Link></li></>
      }

      <div className='divider'></div>
      <li><Link to='/'><FaHome size={25} className='me-4'></FaHome>Home</Link></li>
    </ul>
  
  </div>
</div>
 );
};

export default Dashboard;
      
      