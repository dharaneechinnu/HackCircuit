import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem className="left">© 2024 HackCircuit. All rights reserved.</FooterItem>
      <FooterItem className="center">
        Designed by 
        <StyledLink href="https://example.com/dharaneedharan" target="_blank" rel="noopener noreferrer"> Dharaneedharan </StyledLink>, 
        <StyledLink href="https://example.com/rahul" target="_blank" rel="noopener noreferrer"> Rahul Srinivas </StyledLink>, and 
        <StyledLink href="https://example.com/arun" target="_blank" rel="noopener noreferrer"> Arun Prasad </StyledLink>
      </FooterItem>
      <FooterItem className="right">
        <a href="https://www.instagram.com" className='int' target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
      </FooterItem>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  background-color: #333;
  color: #e0e0e0;
  font-size: 0.8rem;
  width: 98vw;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.4rem;
  }
`;

const FooterItem = styled.div`
  margin: 0;
  cursor: pointer;
  flex: 1;

  &.left {
    text-align: center;
    @media screen and (max-width: 1024px) {
      margin-bottom: 0.5rem;
    }
  }

  &.center {
    text-align: center;
    flex: 2;
    @media screen and (max-width: 1024px) {
      margin-bottom: 0.5rem;
    }
  }

  &.right {
    text-align: center; /* Center the Instagram icon */
    margin-top: 0.5rem;
    @media screen and (max-width: 1024px) {
      margin-top: 0;
    }
  }

  a {
    display: inline-block;
    color: #e0e0e0;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }

    @media screen and (max-width: 1024px) {
     
      font-size: 1.3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .int {
    color: #e1306c;
    transition: color 0.3s;

    &:hover {
      color: #c13584; /* Darker shade for hover effect */
    }
  }
`;

const StyledLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  margin: 0 0.2rem;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`;

export default Footer;
