import React, { useState, useEffect } from 'react';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import useAuthContext from '../../../hooks/useAuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const ClassCard = ({ classInfo }) => {
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { classImage, className, _id, instructorName, price, seat } = classInfo;
  const location=useLocation()
  const { user} = useAuthContext();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();



  const handleSelect = () => {
    if (user && user.email) {
      const selectedClass = {
        classImage,
        classId: _id,
        className,
        instructorName,
        price,
        seat,
        email: user.email,
      };

      axiosSecure
        .post('/selectclass', selectedClass)
        .then((data) => {
          if (data.data.insertedId) {
            setIsDisabled(true);
            
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class selected successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'You Have To Login First!',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}});
        }
      });
    }
  };

  return (
   <Fade delay={300}>
     <div className={`${seat===0?'card w-96 h-[450px] bg-red-400 shadow-xl':'card w-96 h-[450px] bg-base-100 shadow-xl'} `}>
      <figure>
        <img className="w-full h-64" src={classImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <h2 className="text-xl">Instructor Name: {instructorName}</h2>
        <p>Price: ${price}</p>
        <p>Available Seat: {seat}</p>
        <div className="card-actions ">
          {isDisabled ? (
            <button
              disabled={isAdmin || isInstructor || isDisabled}
              onClick={handleSelect}
              className="btn text-white bg-[#ef5743]"
            >
              selected
            </button>
          ) : (
            <button
              disabled={isAdmin || isInstructor || isDisabled || seat === 0}
              onClick={handleSelect}
              className="btn text-white bg-[#ef5743]"
            >
              select
            </button>
          )}
        </div>
      </div>
    </div>
   </Fade>
  );
};

export default ClassCard
