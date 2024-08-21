import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <Text>HC</Text>
      <TextWrapper>
        <Title>HACKCIRCUIT</Title>
      </TextWrapper>
    </Container>
  );
};

// Keyframes for pulsing effect
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Styled component for the container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #121212; /* Dark background for contrast */
  overflow: hidden;
`;

// Styled component for the main text with animation and responsiveness
const Text = styled.div`
  font-family: "Wallpoet", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; /* Set a fixed width */
  height: 150px; /* Set a fixed height equal to width for a perfect circle */
  background-color: #ffff; /* White background */
  border-radius: 50%;
  font-weight: 400;
  color: black;
  font-size: 4rem;
  letter-spacing: 1rem;
  animation: ${pulse} 2s infinite; /* Add pulsing animation */
  text-align: center; /* Center text horizontally */
  
  @media (max-width: 1024px) {
    width: 120px; /* Adjust size for smaller screens */
    height: 120px;
    font-size: 3rem;
    letter-spacing: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
    letter-spacing: 0.6rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    letter-spacing: 0.4rem;
  }

  @media (max-width: 320px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
  }
`;

// Wrapper for additional text elements
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; /* Space between HC and HACKCIRCUIT */
`;

// Styled component for the HACKCIRCUIT text
const Title = styled.div`
  font-family: "Wallpoet", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  color: #fff;
  letter-spacing: 0.8rem;
  margin-top: 10px; /* Space between HC and HACKCIRCUIT */

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 0.4rem;
  }
`;

export default Loading;
