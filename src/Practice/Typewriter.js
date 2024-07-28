import React, { useState, useEffect } from 'react';
import app from '../Practice/app'
const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('senthilnathan');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <div>
      {displayText}
    </div>
  );
};

export default Typewriter;
