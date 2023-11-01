import React from 'react';
import styled from 'styled-components';
import HeroBg from '../../assets/images/hero.jpg';
import { ContentWrapper } from '../../assets/styles/GlobalStyle';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const StyledHero = styled(motion.div)`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background: url(${HeroBg}) center no-repeat;
  background-size: cover;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  ${ContentWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    z-index: 0;
  }
`;

export const AnimatedLink = styled(motion.a)`
  display: block;
  color: #fff;
  margin: 50px 0;
  border: 1px solid #fff;
  width: max-content;
  cursor: pointer;
  transition: 0.15s;

  a {
    display: block;
    padding: 12px 24px;
  }

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const Heading = styled(motion.h1)`
  color: #fff;
`;

export const Paragraph = styled(motion.a)`
  color: #fff;
`;

const Hero = () => {
  return (
    <StyledHero name='home'>
      <ContentWrapper>
        <Heading
          transition={{ duration: 0.8, delay: 0.2 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Kajaki Kamieńczyk
        </Heading>
        <Paragraph
          transition={{ duration: 0.8, delay: 0.4 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Daj się ponieść nurtowi przygody
        </Paragraph>
        <AnimatedLink
          transition={{ duration: 0.8, delay: 0.5 }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link to='about' smooth>
            Czytaj więcej
          </Link>
        </AnimatedLink>
      </ContentWrapper>
    </StyledHero>
  );
};

export default Hero;
