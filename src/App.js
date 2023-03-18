import React from 'react';
import '@styles/styles.scss';
import Home from '@components/Home';
import About from '@components/About';
import Work from '@components/Work';
import Testimonial from '@components/Testimonial';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Home />
      <About />
      <Work /> 
      <Testimonial />
      <Contact />
      {/* <Footer /> en espera */}
    </div>
  )
}

export default App
