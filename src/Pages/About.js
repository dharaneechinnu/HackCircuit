import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaInstagram } from "react-icons/fa";
import Lenis from '@studio-freight/lenis'; // Import Lenis for smooth scrolling

const About = () => {
  const aboutRef = useRef(null); // Create a ref for the About section

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const animateScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);

    // Set up IntersectionObserver for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when the section is in view
            entry.target.classList.add('animate-slide-right');
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe the About section
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <Container ref={aboutRef} id='about'>
      <div className="title">
        ABOUT HACKCIRCUIT
      </div>
      <div className="para">
        <p>
          The Department of Information Technology is excited to announce HackCircuit'24, an inter-college hackathon focused on the cutting-edge domains of Cybersecurity, Web Development, and Artificial Intelligence (AI). This event offers a series of challenges across Technical pushing participants to innovate.
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
  max-width: 100%;
  box-sizing: border-box;
  opacity: 0;
  transform: translateX(100px); /* Start off-screen to the right */
  transition: all 0.8s ease-out; /* Smooth transition */

  &.animate-slide-right {
    opacity: 1;
    transform: translateX(0); /* Slide in to its original position */
  }

  .title {
    font-size: 3rem;
    font-family: "Wallpoet";
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 2rem;

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
      background-color: #0066cc;
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
        color: #e1306c;
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
