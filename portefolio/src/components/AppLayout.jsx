import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import Media from './Media.jsx';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import AnimatedIcon from '../components/AnimatedIcon';

// Logic for the page navigation
function Layout() {

  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  const handleClick = () => {
    if (location.pathname === '/') {
      setCurrentPage('About');
    } else if (location.pathname === '/about') {
      setCurrentPage('Works');
    }
  };

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  // Navigate when currentPage changes
  useEffect(() => {
    switch (currentPage) {
      case 'Home':
        navigate('/');
        break;
      case 'About':
        navigate('/about');
        break;
      case 'Works':
        navigate('/works');
        break;
    }
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('currentUrl', location.pathname);
  }, [location.pathname]);

  // Update the current page based on the URL when the component mounts
  useEffect(() => {
    const storedURL = localStorage.getItem('currentUrl');
    if (storedURL) {
      setCurrentPage(storedURL);
    } else {
      setCurrentPage('/');
    }
  }, [currentPage]);


  // App Layout
  return (
    <div className="content">
      <Navigation onNavClick={handleNavigationClick} />
      <div className="main-content">
        <Outlet />
        <Media />
      </div>
      {currentPage && currentPage !== '/works' && <AnimatedIcon handleClick={handleClick} />}
      <Footer />
    </div>
  );
}

export default Layout;
