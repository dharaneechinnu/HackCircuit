import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Main from '../Pages/Main';
import About from '../Pages/About';
import Nav from '../Pages/Nav';
import Sponsor from '../Pages/Sponsor';
import Loading from '../Pages/Loading';
import Event from '../Pages/Event';
import Footer from '../Pages/Footer';
import Team from '../Pages/Team';

// Styled container to make the page fit the viewport
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Content section that grows to fill available space
const Content = styled.div`
  flex: 1;
`;

const Pages = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data, initializing components)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Nav />
      <Content>
        <Main />
        <About />
        <Sponsor />
        <Event />
      </Content>
      <Team />
      <Footer />
    </Container>
  );
};

export default Pages;
