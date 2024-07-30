import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import Media from './Media.jsx'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import AnimatedIcon from '../components/AnimatedIcon'


//Logic for the page navigation
function Layout() {
  const [currentPage, setCurrentPage] = useState('Works')
  const navigate = useNavigate();
  const location = useLocation();


  const handleClick = () => {
    if (currentPage === 'Home') {
      setCurrentPage('About');
    } else if (currentPage === 'About') {
      setCurrentPage('Works');
    }
  }

  useEffect(() => {
    if (currentPage === 'Home') {
      navigate('/');
    } else if (currentPage === 'About') {
      navigate('/about');
    } else if (currentPage === 'Works') {
      navigate('/works');
    }
  }, [currentPage, navigate]);

  useEffect(() => {
    localStorage.setItem('currentUrl', location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const storedURL = localStorage.getItem('currentUrl')
    if (storedURL) {
      navigate(storedURL)
    } else {
      return null
    }
  }, [navigate])

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };


  // App Layout
  return (
    <div className="content">

      <Navigation onNavClick={handleNavigationClick} />

      <div className='main-content'>
        <Outlet />
        <Media />
      </div>

      {currentPage === 'Works' ? null : <AnimatedIcon
        handleClick={handleClick}
      />}

      <Footer />

    </div >
  );
}

export default Layout;