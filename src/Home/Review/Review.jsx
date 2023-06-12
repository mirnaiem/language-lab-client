import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade, Slide } from 'react-awesome-reveal';


const Review = () => {
 
 
 return (
  <div className='mb-16'>
 <Slide >
 <h2 className='text-center text-4xl md:text-5xl font-bold'>Student Review</h2>
 </Slide>
   <Slide direction='left'>
   <div className='divider w-2/6 md:w-1/6  mx-auto'></div>
   </Slide>
  <div className='bg-[#fff6f4] '>
   
   <div className='flex flex-col py-24 md:flex-row gap-4 md:gap-16 justify-center md:items-center w-4/5 mx-auto'>
  
   
    <img className=' w-full md:w-1/2 rounded-xl md:rounded-full' src="https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=sph" alt="" />
    
   
    <div className='w-full md:w-1/2'>
     <Fade direction='up'>
     <h2 className='text-5xl font-bold'> what our <span className='text-[#ef5743]'>Students</span> say about us</h2>
     </Fade>

     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className='mt-8'>
          The language school provided an incredible learning experience. The teachers were knowledgeable and passionate about teaching, making the classes engaging and interactive. I noticed a significant improvement in my language skills within a short period. Highly recommended!
          </p>
          <div className='flex items-center justify-center mt-8'>
           
            <img className='w-16 h-16 rounded-full me-2' src="https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=sph" alt="" />
            
           <div className=''>
           <h2 className='font-bold'>Jenifer</h2>
            <h2 className='font-bold text-blue-500'>Student</h2>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className='mt-8'>
          Attending this language school was a game-changer for me. The curriculum was well-structured and tailored to my individual needs. The small class sizes allowed for personalized attention, and the supportive environment encouraged me to practice speaking confidently. I'm grateful for the positive impact it had on my language proficiency.
          </p>
          <div className='flex items-center justify-center mt-8'>
            <img className='w-16 h-16 rounded-full me-2' src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=sph" alt="" />
           <div className=''>
           <h2 className='font-bold'>Allu Arjun</h2>
            <h2 className='font-bold text-blue-500'>Student</h2>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className='mt-8'>
          I couldn't be happier with my decision to join this language school. The instructors were not only skilled at teaching the language but also made the learning process enjoyable. They utilized various resources, including multimedia and immersive activities, which helped me grasp the language more effectively. I felt motivated to continue learning even outside the classroom!
          </p>
          <div className='flex items-center justify-center mt-8'>
            <img className='w-16 h-16 rounded-full me-2' src="https://img.freepik.com/free-photo/positive-college-student-has-dark-skin-carries-folders-book-points-with-cheerful-expression-aside-has-toothy-smile_273609-23704.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=sph" alt="" />
           <div className=''>
           <h2 className='font-bold'>Rovert Mugabe</h2>
            <h2 className='font-bold text-blue-500'>Student</h2>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className='mt-8'>
          This language school exceeded my expectations. The staff was friendly and accommodating, creating a welcoming atmosphere from the moment I walked in. The course material was comprehensive, covering all aspects of language learning. Thanks to their well-rounded approach, I now feel more confident and competent in my language abilities.
          </p>
          <div className='flex items-center justify-center mt-8'>
            <img className='w-16 h-16 rounded-full me-2' src="https://img.freepik.com/free-photo/happy-student-with-graduation-hat-diploma-grey_231208-12979.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=sph" alt="" />
           <div className=''>
           <h2 className='font-bold'>Hilary Clinton</h2>
            <h2 className='font-bold text-blue-500'>Student</h2>
           </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
   </div>
  </div>
  </div>
 );
};

export default Review;