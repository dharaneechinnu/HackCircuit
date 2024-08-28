import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoLocation } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

const Event = () => {
  const instructionRef = useRef(null);
  const ruleRef = useRef(null);
  const domainRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0 }
    );

    // Observe elements for scroll animation
    [instructionRef, ruleRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    domainRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <EventContainer id="event">
      <EventTitle>Event Description</EventTitle>
      <EventDescription>
        <p>
          Join us for an 8-hour innovation hackathon, hosted by our club,
          exclusively for IT students! This event is designed to bring together
          creative minds to develop and showcase their groundbreaking ideas.
        </p>
        <p>
          Teams will first go through an online shortlisting process, where
          their innovative ideas will be evaluated. The selected teams will then
          be invited to participate in the main hackathon, where they will work
          intensively to bring their concepts to life.
        </p>
        <p>
          Don't miss this chance to push your boundaries, collaborate with peers,
          and experience the thrill of innovation. Get ready for a day filled with
          creativity, competition, and learning!
        </p>
      </EventDescription>
      <EventDetails>
        <DetailItem>
          <Location><IoLocation className='icon' /> SRM Ramapuram, BMS Block, 7th Floor, Project Lab</Location>
        </DetailItem>
        <DetailItem>
          <Time><IoIosTime className='icon' /> 9:00am - 5:00pm</Time>
        </DetailItem>
      </EventDetails>
      <DomainContainer>
        {['Cybersecurity', 'Web Development', 'Artificial Intelligence'].map((domain, index) => (
          <DomainBox 
            key={index} 
            ref={(el) => (domainRefs.current[index] = el)} // Assign refs to each DomainBox
          >
            {domain}
          </DomainBox>
        ))}
      </DomainContainer>

      {/* Instruction and Rules Boxes */}
      <InstructionBox ref={instructionRef}>
        <h3>Instructions</h3>
        <ul>
          <li>Register your team online before the event.</li>
          <li>Ensure all team members are familiar with the event rules.</li>
          <li>Bring your own laptops and necessary tools.</li>
          <li>Follow the schedule and participate actively.</li>
        </ul>
      </InstructionBox>
      <RuleBox ref={ruleRef}>
        <h3>Rules</h3>
        <ul>
          <li>No plagiarism or use of pre-existing solutions.</li>
          <li>Teams must work independently without external help.</li>
          <li>Submission deadline must be strictly followed.</li>
          <li>Respect other participants and adhere to the code of conduct.</li>
        </ul>
      </RuleBox>
    </EventContainer>
  );
};

// Styled-components for Location and Time without animation
const Location = styled.div`
 font-size: 1rem;
 font-weight: 500;
`;

const Time = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

// Styled-components for styling the Event component
const EventContainer = styled.div`
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const EventTitle = styled.h1`
  font-size: 2.5rem;
  font-family: 'Wallpoet';
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }
`;

const EventDescription = styled.div`
  font-family: "Merienda", cursive;
  width: 80%;
  max-width: 700px;
  text-align: justify;
  line-height: 1.6;
  color: #e0e0e0;

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    width: 95%;
  }
`;

const EventDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 700px;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #000000;
  border-radius: 8px;
  width: calc(50% - 1rem);
  background-color: #fff;
  margin: 0.5rem;

  .icon {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const DomainContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const DomainBox = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background-color: #1f1f1f;
  color: #ffffff;
  font-family: "Merienda", cursive;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #303030;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;

// Styled-components for InstructionBox and RuleBox with fade-up animation
const InstructionBox = styled.div`
  width: 80%;
  max-width: 700px;
  padding: 1rem;
  margin-top: 2rem;
  background-color: #2d2d2d;
  border-radius: 8px;
  color: #fff;
  text-align: justify;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
  font-family: "Merienda", cursive;

  &.slide-in {
    opacity: 1;
    transform: translateY(0);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

// Reusing InstructionBox styles for RuleBox
const RuleBox = styled(InstructionBox)`
  margin-top: 1rem;
`;

export default Event;
