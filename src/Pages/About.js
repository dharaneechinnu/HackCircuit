import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <Container id='about'>
      <div className="title">
        ABOUT HACKCIRCUIT
      </div>
      <div className="para">
        <p>
          The Department of Information Technology is excited to announce HackCircuit'24, an inter-college hackathon focused on the cutting-edge domains of Cybersecurity, Web Development, and Artificial Intelligence (AI). This event offers a series of challenges across Technical, Non-technical, and On-the-spot categories, pushing participants to innovate and excel.
        </p>
      </div>
      <div className="button">
        <a href="https://forms.gle/epvW328ZfiNSPByj6">Register</a>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212; /* Dark background for better contrast */
  width: 100%;
  max-width: 100%; /* Ensure the width doesn't exceed the screen */
  box-sizing: border-box; /* Include padding in the element's width and height */
  
  .title {
    font-size: 3rem;
    font-family: "Wallpoet";
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .para {
    color: #e0e0e0;
    width: 90%;
    max-width: 900px;
    margin: 1rem auto;
    padding: 1rem;
    letter-spacing: 0.1rem;
    text-align: center;
    font-family: "Merienda", cursive;
    p {
      font-size: 1.5rem;
      text-align: justify;
      line-height: 1.6;

      @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }

      @media screen and (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }

  .button {
    margin-top: 2rem;
    text-align: center;

    a {
      display: inline-block;
      padding: 12px 24px;
      background-color: #0066cc; /* Blue background for the button */
      color: #ffffff;
      text-decoration: none;
      font-size: 1.2rem;
      border-radius: 8px;
      transition: background-color 0.3s, transform 0.3s;
      box-shadow: 0 0 10px rgba(0, 102, 204, 0.5);

      &:hover {
        background-color: #005bb5;
        transform: scale(1.05);
      }

      @media screen and (max-width: 1024px) {
        font-size: 1.1rem;
        padding: 10px 20px;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 8px 16px;
      }

      @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        padding: 6px 12px;
      }
    }
  }

  .social-media {
    margin-top: 2rem;
    text-align: center;

    a {
      display: inline-block;
      margin: 0 10px;
      color: #e1306c;
      transition: color 0.3s, transform 0.3s;
      font-size: 2rem;

      &:hover {
        color: #e1306c; /* Instagram brand color */
        transform: scale(1.2);
      }

      @media screen and (max-width: 1024px) {
        font-size: 1.8rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 480px) {
        font-size: 1.3rem;
        margin: 0 5px;
      }
    }
  }
`;

export default About;
