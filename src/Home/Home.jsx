import React, { useState, useRef, useEffect } from 'react';
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import Review from './Review/Review';
import './Home.css';

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleRef = useRef(null);

  const handleThemeToggle = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!toggleRef.current.contains(event.target)) {
        setIsDarkTheme(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const themeClass = isDarkTheme ? 'dark' : 'light';

  return (
    <div className={`home ${themeClass}`}>
      <form className="form-control">
        <label className="label cursor-pointer" ref={toggleRef}>
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
