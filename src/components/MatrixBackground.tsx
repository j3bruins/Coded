
import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const digits = ['0', '1'];
    const numberOfDigits = 50;

    const createDigit = () => {
      const digit = document.createElement('div');
      digit.className = 'matrix-digit';
      digit.textContent = digits[Math.floor(Math.random() * digits.length)];
      digit.style.left = `${Math.random() * 100}%`;
      digit.style.animationDelay = `${Math.random() * 5}s`;
      digit.style.transform = `translateZ(${Math.random() * 100}px)`;
      container.appendChild(digit);

      // Remove the digit after animation
      digit.addEventListener('animationend', () => {
        digit.remove();
      });
    };

    // Create initial digits
    for (let i = 0; i < numberOfDigits; i++) {
      createDigit();
    }

    // Continuously create new digits
    const interval = setInterval(() => {
      createDigit();
    }, 200);

    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="matrix-background" />;
};
