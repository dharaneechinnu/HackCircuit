import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon from react-icons
import bg from '../Assets/bg6.png'; // Replace with the correct image paths

const Team = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <TeamContainer id="team">
      <MainTitle>OUR TEAM</MainTitle>

      {/* Student Coordinator Section */}
      <Section ref={(el) => (sectionRefs.current[0] = el)}>
        <SectionTitle>Student Coordinator</SectionTitle>
        <MembersContainer>
          {[1, 2, 3].map((index) => (
            <MemberCard
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <MemberPhoto src={bg} alt={`Member ${index}`} />
              <MemberName>Person {index}</MemberName>
              <MemberPosition>Student Coordinator</MemberPosition>
              <LinkedInIcon
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>
          ))}
        </MembersContainer>
      </Section>

      {/* Design Team Section */}
      <Section ref={(el) => (sectionRefs.current[4] = el)}>
        <SectionTitle>Design Team</SectionTitle>
        <MembersContainer>
          {[4, 5, 6].map((index) => (
            <MemberCard
              key={index}
              ref={(el) => (sectionRefs.current[index + 3] = el)}
            >
              <MemberPhoto src={bg} alt={`Designer ${index - 3}`} />
              <MemberName>Designer {index - 3}</MemberName>
              <MemberPosition>Design Team</MemberPosition>
              <LinkedInIcon
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>
          ))}
        </MembersContainer>
      </Section>
    </TeamContainer>
  );
};

const TeamContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #121212;
`;

const MainTitle = styled.h1`
  color: #fff;
  font-family: 'Wallpoet';
  font-weight: 400;
  font-size: clamp(2.5rem, 5vw, 3rem);
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

const Section = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;

  &.fade-up {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-family: 'Wallpoet';
  font-weight: 400;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const MemberCard = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;

  &.fade-up {
    opacity: 1;
    transform: translateY(0);
  }

  @media (min-width: 600px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(33.333% - 20px);
  }
`;

const MemberPhoto = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const MemberName = styled.h3`
  color: #fff;
  margin: 10px 0 5px;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: bold;
`;

const MemberPosition = styled.p`
  margin: 5px 0 10px;
  color: #aaa;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
`;

const LinkedInIcon = styled.a`
  color: #0077b5;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #005582;
  }
`;

export default Team;
