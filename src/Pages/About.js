import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container id="about" ref={sectionRef}>
      <div className="title">ABOUT HACKCIRCUIT</div>
      <div className="para">
        <p>
          The Department of Information Technology is excited to announce
          HackCircuit'24, an inter-college hackathon focused on the
          cutting-edge domains of Cybersecurity, Web Development, and
          Artificial Intelligence (AI). This event offers a series of
          challenges across Technical, Non-technical, and On-the-spot
          categories, pushing participants to innovate and excel.
        </p>
      </div>
      <div className="button">
        <a href="https://forms.gle/epvW328ZfiNSPByj6">Register</a>
      </div>
      <div className="social-media">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
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
  background-color: #121212;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;

  &.fade-up {
    opacity: 1;
    transform: translateY(0);
  }

  .title {
    font-size: 3rem;
    font-family: 'Wallpoet';
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
    width: 95%;
    max-width: 1000px;
    margin: 1rem auto;
    padding: 1rem;
    letter-spacing: 0.1rem;
    text-align: center;
    font-family: 'Merienda', cursive;

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
    background-color: transparent; /* Dark background */
    color: #ffffff; /* White text */
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 8px;
    font-weight: 500;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.7); /* White shadow for effect */
    &:hover {
      background-color: transparent; /* Slightly lighter background on hover */
      transform: scale(1.1) rotate(10deg); /* Scale and rotate on hover */
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.7); /* White shadow for effect */
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
