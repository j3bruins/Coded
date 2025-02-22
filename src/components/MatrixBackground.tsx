
import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const digits = ['0', '1'];
    const numberOfDigits = 50;
    const numberOfChains = 3;

    const createDigit = () => {
      const digit = document.createElement('div');
      digit.className = 'matrix-digit';
      digit.textContent = digits[Math.floor(Math.random() * digits.length)];
      digit.style.left = `${Math.random() * 100}%`;
      digit.style.animationDelay = `${Math.random() * 5}s`;
      digit.style.transform = `translateZ(${Math.random() * 100}px)`;
      container.appendChild(digit);

      digit.addEventListener('animationend', () => {
        digit.remove();
      });
    };

    const createChain = () => {
      const chain = document.createElement('div');
      chain.className = 'matrix-chain';
      chain.style.left = `${Math.random() * 100}%`;
      chain.style.top = `${Math.random() * 100}%`;
      chain.style.transform = `rotate(${Math.random() * 360}deg) translateZ(${Math.random() * 50}px)`;
      container.appendChild(chain);

      // Create chain segments
      for (let i = 0; i < 3; i++) {
        const segment = document.createElement('div');
        segment.className = 'chain-segment';
        chain.appendChild(segment);
      }

      setTimeout(() => {
        chain.remove();
      }, 10000);
    };

    // Create initial elements
    for (let i = 0; i < numberOfDigits; i++) {
      createDigit();
    }

    for (let i = 0; i < numberOfChains; i++) {
      createChain();
    }

    // Continuously create new elements
    const digitInterval = setInterval(() => {
      createDigit();
    }, 200);

    const chainInterval = setInterval(() => {
      createChain();
    }, 3000);

    return () => {
      clearInterval(digitInterval);
      clearInterval(chainInterval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="matrix-background" />;
};
