import React from 'react';
import styled, { keyframes } from 'styled-components';
import intro from '../Assets/bg6.png'; // Ensure the path is correct

const Main = () => {
  return (
    <Container id='home'>
      <BackgroundImage src={intro} alt="Bg" />
      <div className="title">
        <AnimatedText>HACKCIRCUIT</AnimatedText>
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

  /* Adding a dark overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
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

// Styled component for the text with gradient and animation
const AnimatedText = styled.div`
  font-size: 8rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5rem;
  word-spacing: 1rem;
  color: white;
  font-family: "Wallpoet", sans-serif;
  padding: 20px;
  border-radius: 10px;
  animation: ${fadeInSlideUp} 1s ease-out; /* Add the animation */

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    letter-spacing: 0.2rem;
    word-spacing: 0.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.3rem;
  }
`;

// Styled component for the date text with animation
const AnimatedDate = styled.div`
  font-family: "Wallpoet", sans-serif;
  font-weight: 400;
  font-size: 4rem;
  letter-spacing: 1rem;
  font-style: normal;
  animation: ${fadeInSlideUp} 3s ease-in-out; /* Add the animation with slight delay */

  @media (max-width: 1024px) {
    font-size: 3rem;
    letter-spacing: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 0.3rem;
  }

  @media (max-width: 320px) {
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }
`;

export default Main;
