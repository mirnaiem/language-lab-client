import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "react-awesome-reveal";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-[#fff1e7] flex flex-col-reverse md:flex-row justify-evenly py-6 md:py-24 md:items-center'>

            <div className='md:w-1/3 ms-2 md:ms-0 space-y-6'>

              <Slide>  <h2 className='text-4xl font-bold'>Discover the World through <span className='text-orange-500'> Language Lab</span></h2>


                <p>Embark on a transformative journey of language learning and discover the world like never before. At [Language Learning School], we offer immersive programs that open doors to new cultures, connections, and opportunities. Expand your horizons and embrace the beauty of language as you embark on this exciting adventure</p>
                <div className='flex gap-3'>
                  <button className='btn bg-cyan-700 text-white'>Explore More</button>
                  <button className='btn bg-red-400 text-white'>Join Us</button>
                </div></Slide>

            </div>
            <img className='rounded-xl' src="https://img.freepik.com/free-photo/teen-classmates-desk_23-2147666574.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#fff1e7] flex flex-col-reverse md:flex-row justify-evenly py-6 md:py-24 md:items-center'>
            <div className='md:w-1/3 ms-2 md:ms-0 space-y-6'>
              <Slide><h2 className='text-4xl font-bold'>Unlock Your Language Potential with <br /><span className='text-emerald-700'>Expert Guidance </span></h2>
                <p>Realize your full language potential with the expert guidance of our experienced instructors at [Language Learning School]. Our personalized approach and engaging teaching methods empower you to develop fluency and confidence. Whether you're a beginner or advanced learner, our supportive environment ensures you thrive in your language learning journey.</p>
                <div className='flex gap-3'>
                  <button className='btn bg-cyan-700 text-white'>Explore More</button>
                  <button className='btn bg-red-400 text-white'>Join Us</button>
                </div></Slide>
            </div>
            <img className='rounded-xl' src="https://img.freepik.com/free-photo/students-with-books-table_23-2147656179.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#fff1e7] flex flex-col-reverse md:flex-row justify-evenly py-6 md:py-24 md:items-center'>
            <div className='md:w-1/3 ms-2 md:ms-0 space-y-6'>
             <Slide> <h2 className='text-4xl font-bold'>Immerse Yourself in Language and Culture<span className='text-orange-500'> Language Lab</span></h2>
              <p>Dive into an immersive language and cultural experience at Language Learning School. Our dynamic programs provide more than just language instruction - they immerse you in the vibrant tapestry of cultures associated with each language. Through interactive activities, engaging conversations, and cultural events, you'll gain a deeper understanding and appreciation for the world around you</p>
              <div className='flex gap-3'>
                <button className='btn bg-cyan-700 text-white'>Explore More</button>
                <button className='btn bg-red-400 text-white'>Join Us</button>
              </div></Slide>
            </div>
            <img className='rounded-xl' src="https://img.freepik.com/premium-photo/english-class-study-with-students-from-different-countries-poland-germany-usa-teamwork-working-multiethnic-students-teacher-study-foreign-languages-together-class-studying-with-laptop_255847-527.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
          </div>
        </SwiperSlide>



      </Swiper>
    </div>
  );
};

export default Banner;