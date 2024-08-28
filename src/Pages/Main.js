import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Lenis from '@studio-freight/lenis'; // Ensure Lenis is installed
import intro from '../Assets/bg6.png'; // Ensure the path is correct

const Main = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true,
    });

    // Start Lenis scroll loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <Container id='home' ref={containerRef}>
      <BackgroundImage src={intro} alt="Bg" />
      <div className="title">
        <AnimatedText>
          {'HACKCIRCUIT'.split('').map((letter, index) => (
            <Letter key={index} delay={index * 0.1}>
              {letter}
            </Letter>
          ))}
        </AnimatedText>
        <AnimatedDate>AUGUST 30</AnimatedDate>
      </div>
    </Container>
  );
};

// Styled component for the container
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  color: #fff;
  text-align: center;
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 0; /* Keep the overlay behind the text */
  }

  .title {
    display: flex;
    flex-direction: column;
    z-index: 1; /* Ensure text is above the background image and overlay */
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  z-index: -1; /* Keep the image behind everything else */
`;

// Keyframes for fade-in and slide-up animation
const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for the text
const AnimatedText = styled.div`
  font-size: 10rem;
  display: flex;
  justify-content: center;
  font-family: "Wallpoet", sans-serif;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

// Keyframes for individual letter animation
const letterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Individual letter component with animation
const Letter = styled.span`
  display: inline-block;
  animation: ${letterAnimation} 0.5s forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;
  color: white;
`;

// Styled component for the date text
const AnimatedDate = styled.div`
  font-family: "Wallpoet", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: 0.8rem;
  font-style: normal;
  animation: ${fadeInSlideUp} 2s ease-in-out; /* Add the animation with a slight delay */

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export default Main;
