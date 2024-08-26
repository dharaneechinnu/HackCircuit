import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon from react-icons
import Nav from './Nav';
import bg from '../Assets/bg6.png'

const Team = () => {
  return (
    <>
      <Nav />
      <TeamContainer id='team'>
        <Title>OUR Team</Title>
        <MembersContainer>
            <MemberCard>
           
              <MemberPhoto src={bg} alt="sd" />
              <MemberName>President</MemberName>
              <MemberPosition>dilli</MemberPosition>
              <LinkedInIcon href="sdfssg" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>

            <MemberCard>
              <MemberPhoto src={bg} alt="sd" />
              <MemberName>Student Coordinator</MemberName>
              <MemberPosition>dilli</MemberPosition>
              <LinkedInIcon href="sdfssg" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>

            <MemberCard>
              <MemberPhoto src={bg} alt="sd" />
              <MemberName>President</MemberName>
              <MemberPosition>dilli</MemberPosition>
              <LinkedInIcon href="sdfssg" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>
        </MembersContainer>

        <MembersContainer>
            <MemberCard>
              <MemberPhoto src={bg} alt="sd" />
              <MemberName>President</MemberName>
              <MemberPosition>dilli</MemberPosition>
              <LinkedInIcon href="sdfssg" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>

            <MemberCard>
              <MemberPhoto src={bg} alt="sd" />
              <MemberName>Student Coordinator</MemberName>
              <MemberPosition>dilli</MemberPosition>
              <LinkedInIcon href="sdfssg" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>

            <MemberCard>
              <MemberPhoto src={bg} alt="sd" />
              <MemberName>President</MemberName>
              <MemberPosition>dilli</MemberPosition>
              <LinkedInIcon href="sdfssg" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkedInIcon>
            </MemberCard>
        </MembersContainer>
      </TeamContainer>
    </>
  );
};

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  color: #fff;
  font-family: "Wallpoet";
  font-weight: 400;
  letter-spacing: 0.5rem;
  font-size: 2rem; /* Adjust font size for smaller screens */
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    color: #005582;
  }

  @media (min-width: 768px) {
    font-size: 3rem; /* Increase font size for larger screens */
  }
`;

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards horizontally */
  gap: 20px;
  width: 100%; /* Ensure the container takes full width */
`;

const MemberCard = styled.div`
  width: calc(100% / 1 - 20px); /* Default to full width for small screens */
  max-width: 300px; /* Maximum width of each card */
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
  box-sizing: border-box; /* Include padding and border in width */

  @media (min-width: 600px) {
    width: calc(50% - 20px); /* Two cards per row for medium screens */
  }

  @media (min-width: 1024px) {
    width: calc(33.333% - 20px); /* Three cards per row for large screens */
  }
`;

const MemberPhoto = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  display: block; /* Ensure it's a block element to center properly */
  margin: 0 auto; /* Center image horizontally */
`;

const MemberName = styled.h3`
  color: #fff;
  margin: 0 0 5px;
  font-size: 1.2rem; /* Adjust font size as needed */
  font-weight: bold;
`;

const MemberPosition = styled.p`
  margin: 5px 0 10px;
  color: #555;
`;

const LinkedInIcon = styled.a`
  color: #0077b5;
  font-size: 24px; /* Increase icon size */
  text-decoration: none;

  &:hover {
    color: #005582;
  }
`;

export default Team;
