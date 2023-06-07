import React from 'react';
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
 return (
  <div>
   <Navbar></Navbar>
   <div className='min-h-screen'>
   <Outlet></Outlet>
   </div>
   <Footer></Footer>
  </div>
 );
};

export default Main;