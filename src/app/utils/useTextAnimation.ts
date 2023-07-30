import { useState, useEffect } from 'react';

const useTextAnimation = (textResponse: string , responseSpeed: number) => {
  const [animatedTextResponse, setAnimatedTextResponse] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < textResponse.length) {
        currentIndex++;
        setAnimatedTextResponse(textResponse.slice(0, currentIndex));
      } else {
        clearInterval(interval); // Stop the animation when currentIndex reaches the end.
      }
    }, responseSpeed);

    return () => clearInterval(interval);
  }, [textResponse, responseSpeed]);

  return animatedTextResponse;
};

export default useTextAnimation;