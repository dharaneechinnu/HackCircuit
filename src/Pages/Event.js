import React from 'react';
import styled from 'styled-components';

const Event = () => {
  return (
    <EventContainer>
      <EventTitle>Event Description</EventTitle>
      <EventDescription>
        <p>
          Join us for HackCircuit'24, an exciting inter-college hackathon hosted by the Department of Information Technology. This year's event will bring together innovators and tech enthusiasts to tackle challenges in Cybersecurity, Web Development, and Artificial Intelligence (AI).
        </p>
        <p>
          Participants will compete in a variety of categories, including Technical, Non-technical, and On-the-spot challenges. The hackathon aims to foster creativity, collaboration, and technical skills among students, offering them a platform to showcase their talents and push the boundaries of technology.
        </p>
        <p>
          Don't miss out on this opportunity to be part of an exhilarating event that promises learning, networking, and plenty of fun. Mark your calendars and get ready for an unforgettable experience!
        </p>
      </EventDescription>
    </EventContainer>
  );
};

// Styled-components for styling the Event component
const EventContainer = styled.div`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90vw;
  margin: 2rem auto;
  background-color: #121212; /* Added background color for contrast */
  
  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const EventTitle = styled.h1`
  font-size: 2.5rem;
  font-family: "Wallpoet";
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    letter-spacing: 0.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;

const EventDescription = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #e0e0e0;
  text-align: justify;

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default Event;
