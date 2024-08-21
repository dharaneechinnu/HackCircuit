// src/Pages/Pages.js
import React, { useState, useEffect } from 'react';
import Main from '../Pages/Main';
import About from '../Pages/About';
import Nav from '../Pages/Nav';
import Sponsor from '../Pages/Sponsor';
import Loading from '../Pages/Loading';
import Event from '../Pages/Event';

const Pages = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data, initializing components)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <Main />
      <About />
      <Sponsor />
      <Event/>
    </>
  );
};

export default Pages;
