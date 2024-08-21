import React from 'react';
import styled from 'styled-components';
import dec from '../Assets/Dec.png';
import kasi from '../Assets/kasi.png';

const Sponsor = () => {
  return (
    <SponsorContainer id='spo'>
      <SponsorHeading>OUR SPONSORS</SponsorHeading>
      <LogoGrid>
        <SponsorLogo className="large" src={dec} alt="Sponsor Logo" />
        <SponsorLogo className="small" src={kasi} alt="Sponsor Logo" />
        <SponsorLogo className="medium" src={dec} alt="Sponsor Logo" />
        <SponsorLogo className="large" src={kasi} alt="Sponsor Logo" />
        <SponsorLogo className="small" src={dec} alt="Sponsor Logo" />
        <SponsorLogo className="medium" src={kasi} alt="Sponsor Logo" />
        {/* Add more SponsorLogo components as needed */}
      </LogoGrid>
    </SponsorContainer>
  );
};

const SponsorContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212; /* Dark background for better contrast */
  width: 100%;
  max-width: 100%; /* Ensure the width doesn't exceed the screen */
  box-sizing: border-box; /* Include padding in the element's width and height */

`;

const SponsorHeading = styled.h2`
  font-size: 3rem;
  font-family: "Wallpoet";
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }
`;

const SponsorLogo = styled.img`
  width: 90%;
  height: auto;
  object-fit: contain;
  padding: 10px;
  border-radius: 8px;

  &.large {
    grid-column: span 2;
    grid-row: span 2;

    @media screen and (max-width: 768px) {
      grid-column: span 1.5;
      grid-row: span 1.5;
    }

    @media screen and (max-width: 480px) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  &.medium {
    grid-column: span 1.5;
    grid-row: span 1.5;

    @media screen and (max-width: 768px) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  &.small {
    grid-column: span 1;
    grid-row: span 1;
  }
`;

export default Sponsor;
