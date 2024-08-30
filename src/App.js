import React, { useEffect } from 'react';
import './App.css';
import Pages from './main/Pages';
import Lenis from '@studio-freight/lenis'; // Ensure Lenis is installed

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Handle Lenis scroll events
    const handleScroll = () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.classList.add('scrolling'); // Add scrolling effect to cursor
        setTimeout(() => {
          cursor.classList.remove('scrolling');
        }, 300); // Remove effect after some time
      }
    };

    lenis.on('scroll', handleScroll);

    // Start Lenis scroll loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="App">
      <Pages />
   
    </div>
  );
}

export default App;
