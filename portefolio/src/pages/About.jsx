import React from 'react';
import withPageTransition from '../components/TransitionComponent.jsx';

function About() {
  return (
    <article className='about-container'>
      <section>
        <p><span className='strong-text' >Originally</span> from the Tourism industry, I started my carreer as a tour
          guide and as a hotel front-desk clerk.
          <br></br>
          <br></br>
          <span className='strong-text'> In 2020, </span> after the COVID-19 pandemic and for other personal reasons, I shifted my focus to banking
          and later on decided to start working in tech, as an IT technician.
          <br></br>
          <br></br>
          <span className='strong-text'>It was </span> a great learning opportunity and where I learned most of what I know about the inner workings of the Internet.
          <br></br>
          <br></br>
          <span className='strong-text'>I had the chance to  </span> help design the websites for some of our clients, and it was here where I fell in love with web development and the idea of creating web apps that would help others, while being both beautifull and practical.
          <br></br>
          <br></br>
          <span className='strong-text'>Currently </span> I develop projects mostly in React and deploy with Vite, although I am open to try new frameworks and libraries. I also have some experience with SQL and have worked with Firebase DB aswell.
          <br></br>
          <br></br>
          <span className='strong-text'>In terms of styling</span>, I have experience with Tailwind and Bootstrap, despite prefering styling with vanilla CSS (some may call me mad).
          <br></br>
          <br></br>
          <span className='strong-text'>Do feel free</span> to consult my Curriculum Vitae, which you can find below, if you wish to inquire me about work.
        </p>
        <br></br>
        <br></br>
        <div className='download-section'>
          <a href="/Files/CV.pdf" download="CV.pdf" className='download-cv'>
            <img src='/icons/download_icon.png' alt='Download Curriculum Vitae'>
            </img>
            <figcaption id='cv'>Curriculum Vitae</figcaption>
          </a>
          <a href="https://mchurradigitalbcard.netlify.app/" target='_blank' className='download-cv'>
            <img src='/icons/download_icon.png' alt='Digital Business Card'>
            </img>
            <figcaption id='card'>Business Card </figcaption>
          </a>
        </div>
      </section>
    </article>
  );
}

export default withPageTransition(About);