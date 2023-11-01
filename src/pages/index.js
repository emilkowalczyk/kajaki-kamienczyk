import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Directions from '../components/Directions/Directions';

const IndexPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Directions />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Kajaki Kamieńczyk</title>;
