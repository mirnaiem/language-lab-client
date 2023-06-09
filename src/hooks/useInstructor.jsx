
import useAuthContext from './useAuthContext';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
 const {user}=useAuthContext()
 const [axiosSecure]=useAxiosSecure();
 const { data:isInstructor, isLoading:isInstructorLoading}=useQuery({
  queryKey:['isInstructor', user?.email],
  queryFn:async ()=>{
   const res=await axiosSecure(`/users/instructor/${user?.email}`)
   return res.data.admin;
  }
 })
 return [isInstructor,isInstructorLoading]
};

export default useInstructor;