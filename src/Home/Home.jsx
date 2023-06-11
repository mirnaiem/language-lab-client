import React, { useState } from 'react';
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import Review from './Review/Review';
import './Home.css'
const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const themeClass = isDarkTheme ? 'dark' : 'light';

  return (
    <div className={`home ${themeClass} relative`}>      
<form className="form-control absolute z-10 right-4 -top-14">
  <label className="label cursor-pointer">
    <span className="label-text"></span>
    <input
      type="checkbox"
      className={`toggle ${isDarkTheme ? 'toggle-dark' : 'toggle-light'}`}
      checked={isDarkTheme}
      onChange={handleThemeToggle}
    />
  </label>
</form>


      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <Review></Review>
    </div>
  );
};

export default Home;
