import React from 'react';
import withPageTransition from '../components/TransitionComponent.jsx';

function Home() {
  return (
    <>
      <section className='home-container'>
        <h1><strong>Hi!</strong> I'm Marco Churra.</h1>
        <p>I'm a 26 year old Front-End Developer currently residing in Lisbon, Portugal. <br /> I strive to improve my craft everyday,
          in order to create web applications that tackle real-world problems,
          while being simultaneously elegant and user-friendly. </p>
      </section>
    </>
  );
}

export default withPageTransition(Home);