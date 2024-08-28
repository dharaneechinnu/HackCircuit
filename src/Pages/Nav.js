import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false); // Close sidebar after clicking link
    }
  };

  return (
    <Container scrolled={scrolled}>
      <MainContent>
        <NavSection>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Logo>
              <h2 href="#home" onClick={handleLinkClick}><span>HACKCIRCUIT</span></h2>
            </Logo>
          </Link>
        </NavSection>

        {/* Full Navbar Links for Larger Screens */}
        <NavbarLinks>
          <NavbarLink href="#home" onClick={handleLinkClick}>Home</NavbarLink>
          <NavbarLink href="#about" onClick={handleLinkClick}>About</NavbarLink>
          <NavbarLink href="#spo" onClick={handleLinkClick}>Our Sponsor</NavbarLink>
          <NavbarLink href="#event" onClick={handleLinkClick}>Event </NavbarLink>
          <NavbarLink href="#team" onClick={handleLinkClick}>Our Team</NavbarLink>
         
        </NavbarLinks>

        {/* Toggle Button for Mobile Screens */}
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Close--Streamline-Ultimate.svg" height="24" width="24">
              <path d="m0.75 23.249 22.5 -22.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path d="M23.25 23.249 0.75 0.749" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Ascending-Sort-1--Streamline-Ultimate.svg" height="24" width="24">
              <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.75 18.8999h7.3" stroke-width="1.5"></path>
              <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.75 12h14.8" stroke-width="1.5"></path>
              <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.75 5.1001h22.5" stroke-width="1.5"></path>
            </svg>
          )}
        </ToggleButton>
      </MainContent>
      {isOpen && <Backdrop onClick={toggleSidebar} />}
      <Sidebar ref={sidebarRef} isOpen={isOpen}>
        <SidebarContent>
          <SidebarLink href="#home" onClick={handleLinkClick}>Home</SidebarLink>
          <SidebarLink href="#about" onClick={handleLinkClick}>About</SidebarLink>
          <SidebarLink href="#spo" onClick={handleLinkClick}>Our Sponsor</SidebarLink>
          <SidebarLink href="#event" onClick={handleLinkClick}>Event</SidebarLink>
          <SidebarLink href="#team" onClick={handleLinkClick}>Our Team</SidebarLink>
        
        </SidebarContent>
      </Sidebar>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 60px;
  background: ${({ scrolled }) => (scrolled ? 'rgba(18, 18, 18, 0.3)' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px) brightness(1.2)' : 'none')};
  -webkit-backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px) brightness(1.2)' : 'none')}; /* For Safari */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const MainContent = styled.main`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const NavSection = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;

  h2 {
    font-family: "Wallpoet", sans-serif;
    font-weight: 400;
    letter-spacing: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 30px;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }

  &:hover {
    text-decoration: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 250px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  background-color: #1212;
  opacity: 0.91;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  gap: 40px;
`;

const SidebarLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 0;
  font-size: 1.2rem;

  &:hover {
    text-decoration: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

export default Nav;
