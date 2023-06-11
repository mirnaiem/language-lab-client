import React from 'react';
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import Review from './Review/Review';

const Home = () => {
 return (
  <div>
  <Banner></Banner>
  <PopularClass></PopularClass>
  <PopularInstructor></PopularInstructor>
  <Review></Review>
  </div>
 );
};

export default Home;